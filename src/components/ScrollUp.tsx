import { useEffect } from "react";
import scrollup from "../assets/scroll-up.svg";
import Trackball from "../hooks/Trackball";

export default function ScrollUp(): JSX.Element {
    useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const handleScroll = () => {
      const position = window.pageYOffset;
      const scrollThreshold = 300;

      const scroll = document.getElementById("scroll-up");
  
      if (position > scrollThreshold) {
        scroll?.classList.remove("oscillate-reverse");
        scroll?.classList.add("oscillate");
      } else {
        scroll?.classList.remove("oscillate");
        scroll?.classList.add("oscillate-reverse");
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