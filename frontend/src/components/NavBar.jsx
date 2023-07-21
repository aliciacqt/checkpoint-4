import { Link } from "react-router-dom";
import "../App.scss";

export default function NavBar() {
  return (
    <nav className="menu">
      <ul className="nav-menu-items">
        <li className="nav-text">
          <Link to="/">Accueil</Link>
        </li>
        <li className="nav-text">
          <Link to="/calendar">Calendrier</Link>
        </li>
        <li className="nav-text">
          <Link to="/gallery">Galerie</Link>
        </li>
        <li className="nav-text">
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
    </nav>
  );
}
