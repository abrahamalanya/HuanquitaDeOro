import "./Navbar.css";
import { Link } from "./Link.jsx";

export function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <Link to='/sobre-nosotros'>Sobre Nosotros</Link>
        </li>
      </ul>
      <span className="nav-action">=</span>
    </nav>
  )
}