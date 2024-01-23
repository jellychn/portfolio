import "./Software.scss";
import software from "../assets/software.png";
import Project from "../components/Project";

export default function Software(): JSX.Element {
    return (
        <div className="software">
            <div className="title-container">
                <h1 className="title offset offset-odd">Software.</h1>
                <img className="emoji offset offset-even" src={software} />
            </div>
            <div className="fadeIn">
                <Project />
                <Project />
            </div>
        </div>
    );
}