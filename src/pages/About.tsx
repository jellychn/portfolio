import "./About.scss";
import { useEffect } from "react";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";

import hand from "../assets/hand.png";
import rad from "../assets/rad.png";
import boxing from "../assets/boxing.png";
import gym from "../assets/gym.png";
import badmintion from "../assets/badminton.png";
import running from "../assets/running.png";
import scroll from "../assets/scroll.svg";
import Trackball from "../hooks/Trackball";

export default function About(): JSX.Element {
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const position = window.pageYOffset;
    const scrollThreshold = 300;
    const scroll = document.getElementById("scroll");

    if (position > scrollThreshold) {
      scroll?.classList.remove("oscillate");
      scroll?.classList.add("oscillate-reverse");
    } else {
      scroll?.classList.remove("oscillate-reverse");
      scroll?.classList.add("oscillate");
    }
};

  const scrollToView = (): void => {
    const el = document.getElementById("info");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="tight">
      <div className="main">
        <div className="content">
          <h2 className="hi">
            <img className="hand rotate" src={hand} alt="hand" />
            <span className="flex">
              <span className="offset offset-odd">I'm, </span>
              <span className="offset offset-even">Jerry</span>
            </span>
          </h2>
          <div className="quote">
            <span className="fadeIn">
                Technical, <br />
                with a sprinkle of <br />
                <span className="elegance">Elegance</span>.
            </span>
            <hr className="line" />
            <div className="socials fadeIn">
              <a href="https://www.linkedin.com/in/jerry-chen-3235171b4/" target="_blank" rel="noreferrer">
                <img className="social" src={linkedin} alt="linkedin" />
              </a>
              <a href="https://github.com/jellychn" target="_blank" rel="noreferrer">
                <img className="social" src={github} alt="github" />
              </a>
            </div>
          </div>
        </div>
        <Trackball id="scroll" src={scroll} action={scrollToView} />
      </div>
      <div id="info" className="about-info fadeIn">
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
              <img className="rad" src={rad} alt="rad" />
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
            <p className="sub-title">BS, Computer Science</p>
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
              <p className="sub-title">Feb 2020 - Jan 2022</p>
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
              <p className="title">UX</p>
              <p className="title">
                <br />
                <span className="sub-title">User Journey maps</span>
                <br/>
                <br/>
                <span className="sub-title">Personas</span>
                <br/>
                <br/>
                <span className="sub-title">Workflows</span>
                <br/>
                <br/>
                <span className="sub-title">Wireframes</span>
                <br/>
                <br/>
                <span className="sub-title">Site Maps</span>
                <br/>
                <br/>
                <span className="sub-title">Usability Testing</span>
                <br/>
                <br/>
                <span className="sub-title">Interviews</span>
              </p>
            </div>
          </div>
          <div className="content">
            <div>
              <p className="title">UI</p>
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
                <br />
                <br />
                <span className="sub-title">Iconography</span>
                <br />
                <br />
                <span className="sub-title">Design Systems</span>
                <br />
                <br />
                <span className="sub-title">Interaction Design</span>
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
              <img src={boxing} alt="boxing" />
              <img src={gym} alt="gym" />
              <img src={badmintion} alt="badmintion" />
              <img src={running} alt="running" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
