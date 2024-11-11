import { MENU } from "@/constants";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <ul>
        {MENU.map(({ name, link }) => (
          <li key={name}>
            <Link to={link}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
