import { useNavigate } from "react-router-dom";

import bg from "../../assets/design/agency/bg.png";
import man from "../../assets/design/agency/man.svg";
import woman from "../../assets/design/agency/woman.svg";
import chat from "../../assets/design/agency/chat.svg";
import loopRight from "../../assets/design/agency/loop-right.svg";
import notes from "../../assets/design/agency/notes.svg";
import pause from "../../assets/design/agency/pause.svg";
import illustration from "../../assets/design/agency/illustration.svg";
import squiggleDown from "../../assets/design/agency/squiggle-down.svg";
import ballon from "../../assets/design/agency/balloon.svg";
import think from "../../assets/design/agency/think.svg";
import idea from "../../assets/design/agency/idea.svg";
import plane from "../../assets/design/agency/plane.svg";
import heart from "../../assets/design/agency/heart.svg";
import flow from "../../assets/design/agency/flow.png";
import lowfi from "../../assets/design/agency/low-fi.png";
import highfi from "../../assets/design/agency/high-fi.png";

export default function MBTI(): JSX.Element {
  const navigate = useNavigate();
  return (
    <div className="casestudy">
      <div className="tight">
        <div className="offset offset-odd">
            <p className="breadcrum">/ Design / Design Agency</p>
            <h3 className="highlight-dark-grey">UX . UI . Desktop</h3>
            <h1 className="head-text">Design Agency</h1>
        </div>
        <img className="bg fadeIn" src={bg} alt="bg" />

        <div className="project-details offset offset-even">
          <div className="project-details-section">
            <h5>PROJECT</h5>
            <p>
              <span className="highlight-dark-grey bold">Passion project</span>
              <br />
              <span className="highlight-light-grey">2024</span>
            </p>
          </div>
          <div className="project-details-section">
            <h5>TEAM</h5>
            <p>
              <span className="highlight-light-grey">X1 Product designer</span>
            </p>
          </div>
          <div className="project-details-section">
            <h5>ROLE</h5>
            <p>
              <span className="highlight-pink italic">Product designer</span>
            </p>
          </div>
        </div>
      </div>

      <div className="project-description fadeIn">
        <h2 className="align-center tighter doodle">
          CREATE a{" "}
          <span className="highlight-dark-grey italic">
            Design Agency Landing Page
          </span>{" "}
          to showcase and promote services.
        </h2>
      </div>

      <div className="section-grey fadeIn">
        <div className="tight">
          <h3 className="highlight-dark-grey">WHO</h3>
          <div className="for">
            <h1>Personas</h1>
          </div>
          <div className="persona tighten">
            <img src={man} alt="man" />
            <div className="persona-info">
              <h5 className="doodle">Matt</h5>
              <p>
                <span className="highlight-dark-grey doodle">
                  Small business
                </span>
              </p>
              <p>
                Matt owns a small business and is looking to expand and grow,
                his main concerns are choosing the right agency to help him
                re-brand and produce quality marketing content for his business.
              </p>
              <div className="flex">
                <div className="persona-qualities">
                  <p className="highlight-dark-grey doodle">Motivations</p>
                  <ul>
                    <li className="highlight-pink">Business Growth</li>
                    <li>Brand Enhancement</li>
                    <li>Effective Marketing</li>
                  </ul>
                </div>
                <div className="persona-qualities">
                  <p className="highlight-dark-grey doodle">Pain Points</p>
                  <ul>
                    <li>Choosing the Right Agency</li>
                    <li className="highlight-pink">Maintaining Consistency</li>
                    <li>Budget Constraints</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="persona tighten">
            <img src={woman} alt="woman" />
            <div className="persona-info">
              <h5 className="doodle">Jane</h5>
              <p>
                <span className="highlight-dark-grey doodle">
                  Large cooperation
                </span>
              </p>
              <p>
                Jane is a member of a mega cooperation seeking outsourced design
                agencies to increase cooperate profits through improving product
                user experiences.
              </p>
              <div className="flex">
                <div className="persona-qualities">
                  <p className="highlight-dark-grey doodle">Motivations</p>
                  <ul>
                    <li className="highlight-pink">Business Growth</li>
                    <li>Cooperate Profit</li>
                  </ul>
                </div>
                <div className="persona-qualities">
                  <p className="highlight-dark-grey doodle">Pain Points</p>
                  <ul>
                    <li className="highlight-pink">Maintaining Consistency</li>
                    <li>Better UX Experience</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-dark fadeIn">
        <div className="tight">
          <h3 className="highlight-dark-grey">REQUIREMENTS</h3>
          <h1>What is needed.</h1>
          <div className="p-number">
            <h1>
              P0 -{" "}
              <span className="highlight-dark-grey italic doodle">
                Must Haves
              </span>
            </h1>
            <ul className="highlight-light-grey">
              <li>Single page.</li>
              <li>Effectively showcase agency work.</li>
              <li>
                Incrementally inform users how onboarding process works & what
                is offered.
              </li>
              <li>Show pricing.</li>
              <li>FAQs.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section fadeIn">
        <div className="tight">
          <h3 className="highlight-dark-grey">FLOW</h3>
          <h1>Site Map</h1>
          <img className="image" src={flow} alt="flow" />
        </div>
      </div>

      <div className="section-grey fadeIn">
        <div className="tight">
          <h3 className="highlight-dark-grey">INTERFACE DESIGN</h3>
          <h1>Low-fidelity</h1>
          <img className="image" src={lowfi} alt="lowfi" />
        </div>
      </div>

      <div className="section fadeIn">
        <div className="tight">
          <h3 className="highlight-dark-grey">VISUAL</h3>
          <h1>High-fidelity</h1>
          <div className="tighter">
            <div className="color-pallet">
              <h2 className="align-center doodle">Color.</h2>
              <div className="pallet">
                <div className="color">
                  <div className="col" style={{ backgroundColor: "#FFE3D7" }} />
                  <p className="highlight-dark-grey">#FFE3D7</p>
                </div>
                <div className="color">
                  <div className="col" style={{ backgroundColor: "#1D1D1D" }} />
                  <p className="highlight-dark-grey">#1D1D1D</p>
                </div>
                <div className="color">
                  <div className="col" style={{ backgroundColor: "#FF836F" }} />
                  <p className="highlight-dark-grey">#FF836F</p>
                </div>
                <div className="color">
                  <div className="col" style={{ backgroundColor: "#979797" }} />
                  <p className="highlight-dark-grey">#979797</p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="tighter">
            <div className="iconography">
              <h2 className="align-center doodle">Iconography.</h2>
              <div className="icons">
                <img src={chat} alt="icon" />
                <img src={loopRight} alt="icon" />
                <img src={notes} alt="icon" />
              </div>
              <div className="icons">
                <img src={pause} alt="icon" />
                <img src={illustration} alt="icon" />
                <img src={squiggleDown} alt="icon" />
              </div>
              <div className="icons">
                <img src={ballon} alt="icon" />
                <img src={think} alt="icon" />
                <img src={idea} alt="icon" />
              </div>
              <div className="icons">
                <img src={plane} alt="icon" />
                <img src={heart} alt="icon" />
              </div>
            </div>
          </div>
          <div className="tight">
            <img className="image" src={highfi} alt="highfi" />
          </div>
        </div>
      </div>

      <div className="section-dark fadeIn">
        <div className="tight">
          <button
            onClick={() => navigate("/design")}
            className="align-center doodle back"
          >
            VIEW MORE CASE STUDIES
          </button>
        </div>
      </div>
    </div>
  );
}
