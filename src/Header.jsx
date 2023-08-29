import { Navbar } from "./Navbar.jsx";
import "./Header.css";
import { Link } from "./Link.jsx";

export function Header({ classAdd = "" }) {
  const classComplete = `header vh-10 ${classAdd}`
  return (
    <header className={ classComplete }>
      <Link to='/' className="headerLogo">Huanquita de Oro</Link>
      <Navbar></Navbar>
    </header>
  )
}