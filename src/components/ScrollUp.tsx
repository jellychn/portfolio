import { useEffect } from "react";
import scrollup from "../assets/scroll-up.svg";
import Trackball from "../hooks/Trackball";

export default function ScrollUp(): JSX.Element {
    useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });

      const position = window.pageYOffset;
      const scrollThreshold = 300;

      const scroll = document.getElementById("scroll-up");

      if (scroll) {
        if (position > scrollThreshold) {
          scroll.style.display = "block";
        } else {
          scroll.style.display = "none";
        }
      }
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const handleScroll = () => {
      const position = window.pageYOffset;
      const scrollThreshold = 300;

      const scroll = document.getElementById("scroll-up");
  
      if (scroll) {
        if (position > scrollThreshold) {
          scroll.style.display = "block";
          scroll?.classList.remove("oscillate-reverse");
          scroll?.classList.add("oscillate");
        } else {
          scroll?.classList.remove("oscillate");
          scroll?.classList.add("oscillate-reverse");
          setTimeout(() => {
            scroll.style.display = "none";
          }, 500);
        }
      }
    };
    
    const scrollUp = (): void => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
    }

    return (
        <Trackball id="scroll-up" src={scrollup} action={scrollUp} />
    )
}