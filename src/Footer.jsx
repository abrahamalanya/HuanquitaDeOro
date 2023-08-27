import "./Footer.css"

export function Footer() {
  
  const logo = "Huanquita de Oro";
  const email = "compra@huanquitadeoro.com";
  const phone = "+51 987 675 543";
  const facebook = "https://www.facebook.com/profile.php?id=100006171587610";

  return (
    <footer className="footer">
      <div className="footerContent">
        <h5 className="footerContent-logo">{logo}</h5>
        <div className="footerContent-text">
          <span>{email}</span>
          <span>{phone}</span>
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