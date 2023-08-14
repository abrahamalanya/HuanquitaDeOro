import { Navbar } from "./Navbar.jsx";
import "./Header.css";

export function Header() {
  return (
    <header className="header">
      <h1 className="headerLogo">Huanquita de Oro</h1>
      <Navbar></Navbar>
    </header>
  )
}