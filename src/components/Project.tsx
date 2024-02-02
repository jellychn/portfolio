import { useNavigate } from "react-router-dom";
import { Type } from "../type/types";
import "./Project.scss";

export default function Project({
  project,
}: {
  project: {
    name: string;
    type: Type;
    pills: string[];
    description: string;
    buttonLabel: string;
    url: string;
    img: any;
  };
}): JSX.Element {
  const { name, type, pills, description, buttonLabel, url, img } = project;

  return (
    <div className="project">
      <div className="info">
        <h2>{name}</h2>

        <div className="pill-container">
          {pills.map((pill) => (
            <div className="pill">{pill}</div>
          ))}
        </div>

        <p>{description}</p>
        <Button type={type} url={url} buttonLabel={buttonLabel} />
      </div>
      <div className="display">
        <img src={img} />
      </div>
    </div>
  );
}

const Button = ({ type, url, buttonLabel }: { type: Type; url: string; buttonLabel: string }): JSX.Element => {
  const navigate = useNavigate();
  
  if (type === Type.Software) {
    return (
      <a href={url} target="_blank">
        <button>{buttonLabel}</button>
      </a>
    );
  }

  return <button onClick={() => navigate(url)}>{buttonLabel}</button>
};