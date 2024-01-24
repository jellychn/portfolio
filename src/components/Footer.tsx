import "./Footer.scss";
import copyright from "../assets/copyright.svg";

export default function About(): JSX.Element {
  return (
    <div className="footer fadeIn">
      <img src={copyright} />
      <p>JC</p>
    </div>
  );
}
