import "./MBTI.scss";
import { useNavigate } from "react-router-dom";

import bg from "../../assets/design/MBTI/bg.png";
import important from "../../assets/design/MBTI/important.svg";
import anne from "../../assets/design/MBTI/anne.svg";
import jo from "../../assets/design/MBTI/jo.svg";
import jess from "../../assets/design/MBTI/jess.svg";
import traits from "../../assets/design/MBTI/traits.svg";
import book from "../../assets/design/MBTI/book.svg";
import personalities from "../../assets/design/MBTI/personalities.svg";
import flow1 from "../../assets/design/MBTI/flow1.png";
import flow2 from "../../assets/design/MBTI/flow2.png";
import sitemap from "../../assets/design/MBTI/sitemap.png";
import lowfi from "../../assets/design/MBTI/low-fi.png";
import highfi from "../../assets/design/MBTI/high-fi.png";

export default function MBTI(): JSX.Element {
  const navigate = useNavigate();
  return (
    <div className="mbit">
      <div className="tight">
        <div className="offset offset-odd">
            <h4>UX . UI . App</h4>
            <h1 className="head-text">MBTI</h1>
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
        <h2 className="align-center tighter">
          <span className="italic">DESIGN</span> a{" "}
          <span className="italic highlight-dark-grey">MBTI</span> app to help
          users better understand their{" "}
          <span className="italic highlight-dark-grey">personality</span>.
        </h2>
      </div>

      <div className="tight fadeIn">
        <div className="section">
          <h3 className="highlight-dark-grey">BACKGROUND STORY</h3>
          <h1>What is MBTI?</h1>
          <div className="more-info">
            <a
              href="https://www.16personalities.com/"
              target="_blank"
              className="highlight-light-grey italic underline"
            >
              MORE INFO
            </a>
          </div>
          <p>
            The Myers-Briggs Type Indicator (MBTI) is a widely used{" "}
            <span className="highlight-pink">Personality Assessment</span> that
            categorizes individuals into one of{" "}
            <span className="highlight-pink">16 personality </span>
            types based on their preferences in four dichotomies:
            Extraversion/Introversion, Sensing/Intuition, Thinking/Feeling, and
            Judging/Perceiving. It aims to provide insights into how individuals
            perceive the world, make decisions, and interact with others. The
            resulting personality types offer a framework for understanding
            oneself and can be applied to areas such as personal development,
            career planning, team dynamics, and relationship compatibility.
          </p>
          <div className="personality-types">
            <h5 style={{ color: "#88619A" }}>Analysts</h5>
            <h5 style={{ color: "#33A474" }}>Diplomats</h5>
            <h5 style={{ color: "#4298B4" }}>Sentinels</h5>
            <h5 style={{ color: "#E4AE3A" }}>Explorers</h5>
          </div>

          <h1>Why is it important?</h1>
          <div className="flex">
            <p>
              The{" "}
              <span className="highlight-pink">
                Myers-Briggs Type Indicator (MBTI)
              </span>{" "}
              helps individuals gain insights into their own preferences,
              behaviors, and communication styles, fostering self-awareness. In
              terms of career development, it provides guidance by aligning
              personality types with suitable roles and work environments. In
              team settings, MBTI enhances collaboration by highlighting diverse
              personality types, improving understanding and communication. It
              contributes to conflict resolution by acknowledging and
              appreciating differing perspectives. Additionally, MBTI promotes
              personal growth through self-reflection on strengths, weaknesses,
              and areas for development. It can also be applied to improve
              relationship dynamics by offering insights into how individuals
              approach emotions, decision-making, and other crucial aspects of
              interpersonal relationships.
            </p>
            <img className="important" src={important} alt="important" />
          </div>
        </div>
      </div>

      <div className="section-grey fadeIn">
        <div className="tight">
          <h3 className="highlight-dark-grey">TARGET AUDIENCE</h3>
          <div className="for">
            <h1>Who is it for?</h1>
            <p>
              The Myers-Briggs Type Indicator (MBTI) is for individuals seeking
              self-awareness, career guidance, and improved teamwork. It's also
              useful for personal growth and understanding relationship
              dynamics.
            </p>
          </div>
          <div className="persona tighten">
            <img src={anne} alt="anne" />
            <div className="persona-info">
              <h5>Anne</h5>
              <p>
                <span className="highlight-dark-grey">Student</span>
                <br />
                <br />
                <span className="highlight-light-grey">Age: 18</span>
                <br />
                <span className="highlight-light-grey">
                  Relationship: Single
                </span>
              </p>
              <p>
                Jess, a passionate university student, is gearing up to conquer
                the world post-graduation. She's currently in the process of
                navigating her thoughts and navigating through life.
              </p>
              <div className="flex">
                <div className="persona-qualities">
                  <p className="highlight-dark-grey">Motivations</p>
                  <ul>
                    <li>Self Awareness</li>
                    <li className="highlight-pink">
                      Seeking a Suitable Career to Pursue
                    </li>
                    <li>Pursue of Meaning in Life</li>
                  </ul>
                </div>
                <div className="persona-qualities">
                  <p className="highlight-dark-grey">Pain Points</p>
                  <ul>
                    <li>Lack of Experience</li>
                    <li className="highlight-pink">Uncertainty</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="persona tighten">
            <img src={jo} alt="jo" />
            <div className="persona-info">
              <h5>Jo</h5>
              <p>
                <span className="highlight-dark-grey">Artist</span>
                <br />
                <br />
                <span className="highlight-light-grey">Age: 25</span>
                <br />
                <span className="highlight-light-grey">
                  Relationship: In-relationship
                </span>
              </p>
              <p>
                Jo is artist and is currently contemplating a career change
                towards something more technical. After graduating from an art
                school two years ago with a degree in Fine Arts, Alex has been
                actively exploring opportunities to pivot into a more
                tech-oriented field.
              </p>
              <div className="flex">
                <div className="persona-qualities">
                  <p className="highlight-dark-grey">Motivations</p>
                  <ul>
                    <li>Skill Development</li>
                    <li className="highlight-pink">Career Transition</li>
                    <li>Pursue of Meaning in Life</li>
                  </ul>
                </div>
                <div className="persona-qualities">
                  <p className="highlight-dark-grey">Pain Points</p>
                  <ul>
                    <li>Navigating the Transition</li>
                    <li>Lack of Technical Knowledge</li>
                    <li className="highlight-pink">Uncertainty</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="persona">
            <img src={jess} alt="jess" />
            <div className="persona-info">
              <h5>Jess</h5>
              <p>
                <span className="highlight-dark-grey">Manager</span>
                <br />
                <br />
                <span className="highlight-light-grey">Age: 30</span>
                <br />
                <span className="highlight-light-grey">
                  Relationship: Single
                </span>
              </p>
              <p>
                Jess, an accomplished manager who has ascended to the pinnacle
                of her career ladder, possesses exceptional management and
                interpersonal skills. However, her unwavering focus on her
                professional journey has left little room for romantic pursuits.
                Now, she is eager to deepen her self-understanding and explore
                the possibility of finding a meaningful romantic connection.
              </p>
              <div className="flex">
                <div className="persona-qualities">
                  <p className="highlight-dark-grey">Motivations</p>
                  <ul>
                    <li>Personal Growth</li>
                    <li className="highlight-pink">Self-Understanding</li>
                    <li>Work-Life Balance</li>
                    <li>Relationship Building</li>
                  </ul>
                </div>
                <div className="persona-qualities">
                  <p className="highlight-dark-grey">Pain Points</p>
                  <ul>
                    <li>Limited Time for Personal Life</li>
                    <li>Uncertainty in Romantic Pursuits</li>
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
              <span className="highlight-dark-grey italic">Must Haves</span>
            </h1>
            <ul className="highlight-light-grey">
              <li>Take assessment / Re-take assessment.</li>
              <li>Overview of results.</li>
              <li>Individual personality pages + explanations.</li>
              <li>Career suggestions based on personality traits.</li>
            </ul>
          </div>

          <div className="p-number">
            <h1>
              P1 -{" "}
              <span className="highlight-dark-grey italic">Nice to Haves</span>
            </h1>
            <ul className="highlight-light-grey">
              <li>Team assessment.</li>
              <li>Partnership / Relationship compatibility.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="section fadeIn">
        <div className="tight">
          <h3 className="highlight-dark-grey">FLOWS + STRUCTURE</h3>
          <h1>WORKFLOWS</h1>
          <img className="img-max" src={flow1} alt="flow1" />
          <img className="img-max" src={flow2} alt="flow2" />
          <h1>Site Map</h1>
          <img className="img-max" src={sitemap} alt="sitemep" />
        </div>
      </div>

      <div className="section-grey fadeIn">
        <div className="tight">
          <h3 className="highlight-dark-grey">INTERFACE DESIGN</h3>
          <h1>Low-fidelity</h1>
          <img className="img-max" src={lowfi} alt="lowfi" />
        </div>
      </div>

      <div className="section fadeIn">
        <div className="tight">
          <h3 className="highlight-dark-grey">TESTING</h3>
          <h1>Usability Test</h1>
          <p>
            A un-supervised useability test was conducted on participants using
            a low-fidelity prototype. During the usability test participants
            were given a check list to navigate between screens and comment on
            the prototype. Both negative and positive comments were collected
            and formed into a usability results table, grouped and ordered in
            level of importance. Below are some of the insights gathered from
            this usability test.
          </p>
          <div className="useability-table">
            <div className="useability-table-inner">
              <div className="flex">
                <div className="insights">
                  <h5>PRIMARY INSIGHTS</h5>
                  <h3 className="highlight-light-grey italic">
                    Icon Uncertainty
                  </h3>
                </div>
                <div className="analysis">
                  <h5>ANALYSIS</h5>
                  <p>
                    When user first see the home page with the navigation bar
                    the icons can be miss interpreted, therefor added extra
                    information to icons when long pressed. Showing a hint pop
                    up about what the icon does.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="insights">
                  <h3 className="highlight-light-grey italic">
                    Differ between Taken / Has not Taken Assessment
                  </h3>
                </div>
                <div className="analysis">
                  <p>
                    More emphasis on if a user has / has not taken the test: to
                    combat this, themed backgrounds will be introduced. Using a
                    neutral background to indicate users who have not taken the
                    assessment and a themed one based on their assessment
                    results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-grey fadeIn">
        <div className="tight">
          <h3 className="highlight-dark-grey">VISUAL</h3>
          <h1>High-fidelity</h1>
          <div className="tighter">
            <div className="color-pallet">
              <h2 className="align-center">Color.</h2>
              <div className="pallet">
                <div className="color">
                  <div className="col" style={{ backgroundColor: "#3A2942" }} />
                  <p className="highlight-dark-grey">#3A2942</p>
                </div>
                <div className="color">
                  <div className="col" style={{ backgroundColor: "#164632" }} />
                  <p className="highlight-dark-grey">#164632</p>
                </div>
                <div className="color">
                  <div className="col" style={{ backgroundColor: "#1C414D" }} />
                  <p className="highlight-dark-grey">#1C414D</p>
                </div>
                <div className="color">
                  <div className="col" style={{ backgroundColor: "#614919" }} />
                  <p className="highlight-dark-grey">#614919</p>
                </div>
              </div>
              <div className="pallet">
                <div className="color">
                  <div className="col" style={{ backgroundColor: "#88619A" }} />
                  <p className="highlight-dark-grey">#88619A</p>
                </div>
                <div className="color">
                  <div className="col" style={{ backgroundColor: "#33A474" }} />
                  <p className="highlight-dark-grey">#33A474</p>
                </div>
                <div className="color">
                  <div className="col" style={{ backgroundColor: "#4298B4" }} />
                  <p className="highlight-dark-grey">#4298B4</p>
                </div>
                <div className="color">
                  <div className="col" style={{ backgroundColor: "#E4AE3A" }} />
                  <p className="highlight-dark-grey">#E4AE3A</p>
                </div>
              </div>
              <div className="pallet">
                <div className="color">
                  <div className="col" style={{ backgroundColor: "#E7DFEA" }} />
                  <p className="highlight-dark-grey">#E7DFEA</p>
                </div>
                <div className="color">
                  <div className="col" style={{ backgroundColor: "#D6ECE3" }} />
                  <p className="highlight-dark-grey">#D6ECE3</p>
                </div>
                <div className="color">
                  <div className="col" style={{ backgroundColor: "#D9EAF0" }} />
                  <p className="highlight-dark-grey">#D9EAF0</p>
                </div>
                <div className="color">
                  <div className="col" style={{ backgroundColor: "#F9EED7" }} />
                  <p className="highlight-dark-grey">#F9EED7</p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="tighter">
            <div className="iconography">
              <h2 className="align-center">Iconography.</h2>
              <div className="icons">
                <img src={traits} alt="icon" />
                <img src={book} alt="icon" />
                <img src={personalities} alt="icon" />
              </div>
            </div>
          </div>
          <div className="tight">
            <img className="img-max" src={highfi} alt="highfi" />
          </div>
        </div>
      </div>

      <div className="section-dark fadeIn">
        <div className="tight">
          <button
            onClick={() => navigate("/design")}
            className="align-center back"
          >
            BACK
          </button>
        </div>
      </div>
    </div>
  );
}
