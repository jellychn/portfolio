import "./Software.scss";
import software from "../assets/software.png";
import Project from "../components/Project";

import tricor from "../assets/software/tricor.png";
import lawvu from "../assets/software/lawvu.png";
import canit from "../assets/software/canit.png";
import { Type } from "../type/types";

export default function Software(): JSX.Element {
  const projects = [
    {
      name: "Tricor",
      type: Type.Software,
      pills: [
        "React",
        "Tailwind",
        "StoryBook",
        "ExpressJS",
        "Node.js",
        "MS Azure",
        "TypeScript",
      ],
      description:
        "As a software engineer with Dave Clark, I played a pivotal role in the development of the Tricor project—an international, cutting-edge software designed to facilitate seamless corporate onboarding for global companies.",
      buttonLabel: "View",
      url: "https://www.tricorglobal.com/",
      img: tricor,
      disabled: false
    },
    {
      name: "LawVu",
      type: Type.Software,
      pills: ["Angular", "SCSS", "StoryBook", ".NET", "MS Azure", "TypeScript"],
      description:
        "As a software engineer at LawVu, I was integral to the continuous development of the primary LawVu software project. LawVu serves as a global solution for empowering large corporations' in-house legal teams in managing their legal operations.",
      buttonLabel: "View",
      url: "https://lawvu.com/",
      img: lawvu,
      disabled: false
    },
    {
      name: "CanIT Limited",
      type: Type.Software,
      pills: ["Vue", "SCSS", "ExpressJS", "AWS", "Python", "GraphQL"],
      description:
        "As a software engineer at CanIT Limited, I undertook various projects such as: landing pages, inventory systems, e-commerce websites, SMS message systems.",
      buttonLabel: "View",
      url: "https://canit.co.nz/",
      img: canit,
      disabled: false
    },
  ];

  return (
    <div className="software tight">
      <div className="title-container">
        <h1 className="title offset offset-odd">Software.</h1>
        <img className="emoji offset offset-even" src={software} />
      </div>
      <div className="fadeIn">
        {projects.map((project) => (
          <Project project={project} />
        ))}
      </div>
    </div>
  );
}
