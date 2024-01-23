import "./Design.scss";
import design from "../assets/design.png";
import Project from "../components/Project";

export default function Design(): JSX.Element {
    return (
        <div className="design">
            <div className="title-container">
                <h1 className="title offset offset-odd">Product Design.</h1>
                <img className="emoji offset offset-even" src={design} />
            </div>
            <div className="fadeIn">
                <h1>COMMING SOON...</h1>
            </div>
        </div>
    );
}

