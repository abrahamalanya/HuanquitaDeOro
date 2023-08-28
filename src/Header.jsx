import { Navbar } from "./Navbar.jsx";
import "./Header.css";
import { Link } from "./Link.jsx";

export function Header() {
  return (
    <header className="header vh-10">
      <Link to='/' className="headerLogo">Huanquita de Oro</Link>
      <Navbar></Navbar>
    </header>
  )
}