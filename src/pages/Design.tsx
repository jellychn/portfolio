import "./Design.scss";
import Project from "../components/Project";

import mbti from "../assets/design/MBTI/bg.png";
import agency from "../assets/design/agency/bg.png";
import crypto from "../assets/design/crypto/bg.jpg";
import commingsoon from "../assets/coming-soon.png";
import { Type } from "../type/types";

export default function Design(): JSX.Element {
  const projects = [
    {
      name: "MBTI",
      type: Type.Design,
      pills: ["UX", "UI", "App"],
      description:
        "Create an MBTI App for users to discover their personality type based on four dichotomies. The app provides insights for self-awareness and offers guidance on using this knowledge for improved team dynamics and relationship compatibility in both personal and professional settings.",
      buttonLabel: "Case Study",
      url: "/design/MBTI",
      img: mbti,
      disabled: false
    },
    {
      name: "Design Agency",
      type: Type.Design,
      pills: ["UX", "UI", "Desktop"],
      description:
        "Create a Design Agency Landing Page to promote and market agency services. Focusing on UX and UI. The landing page should guide and convince users to onboard with the agency.",
      buttonLabel: "Case Study",
      url: "/design/Agency",
      img: agency,
      disabled: false
    },
    {
      name: "Crypto Dashboard",
      type: Type.Design,
      pills: ["UX", "UI", "Desktop", "App"],
      description:
        "Coming Soon...",
      buttonLabel: "Case Study",
      url: "/",
      img: commingsoon,
      disabled: true
    }
  ];

  return (
    <div className="design tight">
      <div className="title-container">
        <h1 className="title offset offset-odd">Product Design.</h1>
      </div>
      <div className="fadeIn">
        {projects.map((project) => (
          <Project project={project} />
        ))}
      </div>
    </div>
  );
}
