import "./Header.scss";
import { useLocation, useNavigate } from "react-router-dom";


export default function About(): JSX.Element {
  const navigate = useNavigate();
  const location = useLocation();

  const navigation = [
    {
      name: "Design",
      url: "/design",
    },
    {
      name: "Software",
      url: "/software",
    },
    {
      name: "About",
      url: "/",
    },
  ];

  return (
    <div className="header fadeIn">
      <div className="divider" />
      {navigation.map((nav) => (
        <p className={location.pathname === nav.url ? "on" : "off"} onClick={() => navigate(nav.url)}>{nav.name}</p>
      ))}
    </div>
  );
}
