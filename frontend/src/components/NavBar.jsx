import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.scss";

export default function NavBar() {
  const [sidebar, setSideBar] = useState(false);

  const showSidebar = () => setSideBar(!sidebar);

  return (
    <>
      <div className="menu-icon">---</div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="nav-text">
            <Link
              to="/"
              onClick={() => {
                showSidebar();
              }}
            >
              Accueil
            </Link>
          </li>
          <li className="nav-text">
            <Link
              to="/calendar"
              onClick={() => {
                showSidebar();
              }}
            >
              Calendrier
            </Link>
          </li>
          <li className="nav-text">
            <Link
              to="/gallery"
              onClick={() => {
                showSidebar();
              }}
            >
              Galerie
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
