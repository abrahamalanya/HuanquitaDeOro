import "./Footer.css"

export function Footer({ logo, email, phone, facebook }) {
  return (
    <footer className="footer">
      <div className="footerContent">
        <h5 className="footerContent-logo">{logo}</h5>
        <div className="footerContent-text">
          <span>{email }</span>
          <span>{phone }</span>
        </div>
        <div className="footerContent-social">
          <a href={facebook} target="_blank"><i className="fa-brands fa-facebook"></i></a>
        </div>
      </div>
      <div className="footerDeveloper">
        <h6 className="developer">Desarrollador por @abrahamalanya</h6>
      </div>
    </footer>
  )
}