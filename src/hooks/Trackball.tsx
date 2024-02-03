import "./Trackball.scss";

import { useEffect, useRef, useState } from "react";

export default function Trackball({ id, src, action }: { id: string, src: any; action?: () => void }): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);
  const [scrollDivPosition, setScrollDivPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      if (ref.current) {
        const divRect = ref.current.getBoundingClientRect();
        const mouseX = event.clientX - divRect.left - divRect.width / 2;
        const mouseY = event.clientY - divRect.top - divRect.height / 2;
  
        setScrollDivPosition({
          x: mouseX,
          y: mouseY,
        });
      }
    };
  
    const handleMouseEnter = () => {
      const scrollElement = document.getElementById(id);
      if (scrollElement) {
        scrollElement.style.border = "10px solid transparent";
        scrollElement.style.width = "82px";
        scrollElement.style.height = "82px";
      }
    };
  
    const handleMouseLeave = () => {
      setScrollDivPosition({ x: 0, y: 0 });
      const scrollElement = document.getElementById(id);
  
      if (scrollElement) {
        scrollElement.style.transition = "all 0.3s ease-out";
        scrollElement.style.left = "50%";
        scrollElement.style.bottom = "64px";
        scrollElement.style.border = "none";
        scrollElement.style.width = "52px";
        scrollElement.style.height = "52px";
      }
    };
  
    const divElement = ref.current;
    if (divElement) {
      divElement.addEventListener("mousemove", handleMouseMove);
      divElement.addEventListener("mouseleave", handleMouseLeave);
      divElement.addEventListener("mouseenter", handleMouseEnter);

      return () => {
        divElement.removeEventListener("mousemove", handleMouseMove);
        divElement.removeEventListener("mouseleave", handleMouseLeave);
        divElement.removeEventListener("mouseenter", handleMouseEnter);
      };
    }
  }, [id]);

  return (
    <div
      ref={ref}
      id={id}
      className="trackball oscillate"
      onClick={action}
      style={{
        bottom: `calc(64px - ${scrollDivPosition.y}px)`,
        left: `calc(50% + ${scrollDivPosition.x}px)`,
        transition: "all 0.1s ease-out",
      }}
    >
      <img
        src={src}
        alt="icon"
        style={{
          top: `calc(50% + ${scrollDivPosition.y / 5}px)`,
          left: `calc(50% + ${scrollDivPosition.x / 5}px)`,
          transition: "all 0.1s ease-out"
        }}
      />
    </div>
  );
}
