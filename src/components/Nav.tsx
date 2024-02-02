import "./Nav.scss";
import menu from "../assets/menu.svg";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Nav(): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);
  const [scrollDivPosition, setScrollDivPosition] = useState({ x: 0, y: 0 });
  const [showMenu, setShowMenu] = useState(false);
  const id = "menu";
  const scrollThreshold = 80;
  const navigation = [
    {
      name: "Design",
      url: "/design",
    },
    {
      name: "Software",
      url: "/software",
    },
    {
      name: "About",
      url: "/",
    },
  ];

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const position = window.pageYOffset;
    const menu = document.getElementById("menu-container");

    if (menu) {
      if (position > scrollThreshold) {
        menu.style.display = "block";
      } else {
        menu.style.display = "none";
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const position = window.pageYOffset;

    const menu = document.getElementById("menu-container");

    if (menu) {
      if (position > scrollThreshold) {
        menu.style.display = "block";
        menu?.classList.remove("oscillate-menu-reverse");
        menu?.classList.add("oscillate-menu");
      } else {
        menu?.classList.remove("oscillate-menu");
        menu?.classList.add("oscillate-menu-reverse");
        menu.style.display = "none";
      }
    }
  };

  useEffect(() => {
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
  }, []);

  const handleMouseMove = (event: any) => {
    if (ref.current) {
      const divRect = ref.current.getBoundingClientRect();
      const mouseX =
        event.clientX + window.pageXOffset - divRect.left - divRect.width / 2;
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
    }
  };

  const handleMouseLeave = () => {
    setScrollDivPosition({ x: 0, y: 0 });
    const scrollElement = document.getElementById(id);

    if (scrollElement) {
      scrollElement.style.transition = "all 0.3s ease-out";
      scrollElement.style.right = "0";
      scrollElement.style.top = "32px";
      scrollElement.style.border = "none";
    }
  };

  const open = (): void => {
    setShowMenu(true);
    console.log("hi")


    setTimeout(() => {
      const menuNav = document.getElementById("menu-navigation");
      menuNav?.classList.add("show-menu-nav");
    }, 100);
  };

  const close = (): void => {
    setShowMenu(false);

    const menuNav = document.getElementById("menu-navigation");
    menuNav?.classList.remove("show-menu-nav");
  };

  return (
    <>
      <div id="menu-container" className="menu-container">
        <div className="menu-wrapper">
          <div
            ref={ref}
            id="menu"
            onClick={open}
            style={{
              top: `calc(32px + ${scrollDivPosition.y}px)`,
              right: `calc(-${scrollDivPosition.x}px)`,
              transition: "all 0.1s ease-out",
            }}
          >
            <img
              src={menu}
              alt="menu"
              style={{
                top: `calc(50% + ${scrollDivPosition.y / 5}px)`,
                left: `calc(50% + ${scrollDivPosition.x / 5}px)`,
                transition: "all 0.1s ease-out",
              }}
            />
          </div>
        </div>
      </div>

      {showMenu && (
        <div id="backdrop" onClick={close}>
          <div id="menu-navigation">
            {navigation.map((nav) => (
              <div>
                <h1
                  className={location.pathname === nav.url ? "on" : "off"}
                  onClick={() => navigate(nav.url)}
                >
                  {nav.name}
                  <span
                    className={location.pathname === nav.url ? "show" : "hide"}
                  >
                    .
                  </span>
                </h1>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
