import "./About.scss";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";

import hand from "../assets/hand.png";
import rad from "../assets/rad.png";
import boxing from "../assets/boxing.png";
import gym from "../assets/gym.png";
import badmintion from "../assets/badminton.png";
import running from "../assets/running.png";
import { useEffect } from "react";

export default function About(): JSX.Element {
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const position = window.pageYOffset;
    const hr = document.getElementById("hr");
    const scroll = document.getElementById("scroll");

    if (hr?.offsetTop && position > hr?.offsetTop) {
      scroll?.classList.add("hide");
    } else {
      scroll?.classList.remove("hide");
    }
};

  const scrollToView = (): void => {
    const el = document.getElementById("info");
    console.log(el);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="main">
        <div className="content">
          <h2 className="hi">
            <img className="hand rotate" src={hand} />
            <span className="flex">
              <span className="offset offset-odd">I'm, </span>
              <span className="offset offset-even">Jerry</span>
            </span>
          </h2>
          <div className="quote fadeIn">
            <span>
                Technical, <br />
                with a sprinkle of <br />
                <span className="elegance">Elegance</span>.
              </span>
            <hr id="hr" />
            <div className="socials">
              <a href="https://www.linkedin.com/in/jerry-chen-3235171b4/" target="_blank">
                <img className="social" src={linkedin} alt="linkedin" />
              </a>
              <a href="https://github.com/jellychn" target="_blank">
                <img className="social" src={github} alt="github" />
              </a>
            </div>
          </div>
        </div>
        <div id="scroll" className="scroll oscillate" onClick={scrollToView} />
      </div>
      <div id="info" className="info fadeIn">
        <div className="section">
          <div className="content-title">
            <p>MY STORY</p>
          </div>
          <div className="content">
            <p>
              Hi, I’m Jerry.
              <br />
              <br />I have 4 years of experience in the{" "}
              <span>Software Engineering</span> field, crafting beautiful
              frontend components as well as being tech savvy with backend
              development.
              <br />
              <br />
              My <span>Product Design</span> journey has just begun.
              <img className="rad" src={rad} />
            </p>
          </div>
        </div>
        <div className="section">
          <div className="content-title">
            <p>EDUCATION</p>
          </div>
          <div className="content">
            <p className="title">Google UX Design Certificate</p>
            <br />
            <p className="sub-title">UX Design</p>

            <br />
            <br />

            <p className="title">University of Canterbury</p>
            <p className="sub-title">Christchurch, NZ</p>
            <br />
            <p className="sub-title">BA, Computer Science</p>
          </div>
        </div>
        <div className="section">
          <div className="content-title">
            <p>EXPERIENCE</p>
          </div>
          <div className="content">
            <div>
              <p className="sub-title">
                Dave Clark Design, Auckland, NZ
              </p>
              <p className="title">Software Engineer</p>
              <br />
              <p className="sub-title">Mar 2023 - Present</p>

              <hr />
            </div>
            <div>
              <p className="sub-title">LawVu, Tauranga, NZ</p>
              <p className="title">Software Engineer</p>
              <br />
              <p className="sub-title">Jan 2022 - Mar 2023</p>

              <hr />
            </div>
            <div>
              <p className="sub-title">
                CanIT Limited, Christcurch, NZ
              </p>
              <p className="title">Software Engineer</p>
              <br />
              <p className="sub-title">Oct 2020 - Jan 2022</p>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="content-title">
            <p>TECHNICAL</p>
          </div>
          <div className="content">
            <div>
              <p className="title">F/E</p>
              <p className="title">
                <br />
                <span className="sub-title">React</span>
                <br />
                <br />
                <span className="sub-title">Angular</span>
                <br />
                <br />
                <span className="sub-title">Vue</span>
                <br />
                <br />
                <span className="sub-title">CSS / SCSS</span>
                <br />
                <br />
                <span className="sub-title">HTML</span>
                <br />
                <br />
                <span className="sub-title">StoryBook</span>
                <br />
                <br />
                <span className="sub-title">Tailwind</span>
              </p>
            </div>
          </div>
          <div className="content">
            <div>
              <p className="title">B/E</p>
              <p className="title">
                <br />
                <span className="sub-title">AWS</span>
                <br />
                <br />
                <span className="sub-title">.NET</span>
                <br />
                <br />
                <span className="sub-title">NodeJS</span>
              </p>
            </div>
          </div>
          <div className="content">
            <div>
              <p className="title">Languages</p>
              <p className="title">
                <br />
                <span className="sub-title">JavaScript</span>
                <br />
                <br />
                <span className="sub-title">TypeScript</span>
                <br />
                <br />
                <span className="sub-title">Python</span>
                <br />
                <br />
                <span className="sub-title">C#</span>
              </p>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="content-title">
            <p>DESIGN</p>
          </div>
          <div className="content">
            <div>
              <p className="title">UI</p>
              <p className="title">
                <br />
                <span className="sub-title">User Journey maps</span>
              </p>
            </div>
          </div>
          <div className="content">
            <div>
              <p className="title">UX</p>
              <p className="title">
                <br />
                <span className="sub-title">Figma</span>
                <br />
                <br />
                <span className="sub-title">Lo-Fi</span>
                <br />
                <br />
                <span className="sub-title">Hi-Fi</span>
                <br />
                <br />
                <span className="sub-title">Prototypes</span>
              </p>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="content-title">
            <p>ME...</p>
          </div>
          <div className="content">
            <div>
              <img src={boxing} />
              <img src={gym} />
              <img src={badmintion} />
              <img src={running} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
