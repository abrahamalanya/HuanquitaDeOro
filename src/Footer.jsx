import "./Footer.css"

export function Footer({ logo }) {
  return (
    <footer className="footer">
      <div className="footerContent">
        <h5 className="footerContent-logo">{logo}</h5>
        <div className="footerContent-text">
          <span>compra@huanquitadeoro.com</span>
          <span>+51 987 675 543</span>
        </div>
        <div className="footerContent-social">
          <a href="#"><i className="fa-brands fa-facebook"></i></a>
          <a href="#"><i className="fa-brands fa-youtube"></i></a>
        </div>
      </div>
      <div className="footerDeveloper">
        <h6 className="developer">Desarrollador por @abrahamalanya</h6>
      </div>
    </footer>
  )
}