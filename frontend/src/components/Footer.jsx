import { Link } from "react-router-dom";
import "../App.scss";

export default function Footer() {
  return (
    <nav className="footer-items">
      <Link to="/about" className="footer-link">
        À propos
      </Link>
    </nav>
  );
}
