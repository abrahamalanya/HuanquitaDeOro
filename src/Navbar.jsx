import "./Navbar.css"

export function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>Nosotros</li>
        <li>Servicios</li>
        <li>Shop</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
      <span className="nav-action">=</span>
    </nav>
  )
}