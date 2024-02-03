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
    disabled: boolean;
  };
}): JSX.Element {
  const { name, type, pills, description, buttonLabel, url, img, disabled } =
    project;

  return (
    <div className={disabled ? "project disabled" : "project"}>
      <div className="display">
        <img src={img} alt="project-display" />
      </div>
      <div className="info">
        <h2>{name}</h2>

        <div className="pill-container">
          {pills.map((pill) => (
            <div className="pill">{pill}</div>
          ))}
        </div>

        <p>{description}</p>
        <Button
          type={type}
          url={url}
          buttonLabel={buttonLabel}
          disabled={disabled}
        />
      </div>
    </div>
  );
}

const Button = ({
  type,
  url,
  buttonLabel,
  disabled,
}: {
  type: Type;
  url: string;
  buttonLabel: string;
  disabled: boolean;
}): JSX.Element | null => {
  const navigate = useNavigate();

  if (!disabled) {
    if (type === Type.Software) {
      return (
        <a href={url} target="_blank" rel="noreferrer">
          <button>{buttonLabel}</button>
        </a>
      );
    }

    return <button onClick={() => navigate(url)}>{buttonLabel}</button>;
  }

  return null;
};
