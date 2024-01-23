import "./Project.scss";
import img from "../assets/software/tricor.png";

export default function Project(): JSX.Element {
    const pills = ["React", "Tailwind", "StoryBook", "ExpressJS", "Node.js"];
    return (
        <div className="project">
            <div className="info">
                <h2>Project name</h2>

                <div className="pill-container">
                    {pills.map(pill => <div className="pill">{pill}</div>)}
                </div>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                </p>
                <button>Case study</button>
            </div>
            <div className="display">
                <img src={img} />
            </div>
        </div>
    );
}