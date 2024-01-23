import "./Project.scss";

export default function Project({
  project,
}: {
  project: {
    name: string;
    pills: string[];
    description: string;
    button: string;
    url: string;
    img: any;
  };
}): JSX.Element {
  const { name, pills, description, button, url, img } = project;

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
        <a href={url} target="_blank">
            <button>{button}</button>
        </a>
      </div>
      <div className="display">
        <img src={img} />
      </div>
    </div>
  );
}
