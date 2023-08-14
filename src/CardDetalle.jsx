import "./CardDetalle.css";

export function CardDetalle({ icon, title, description }) {
  const iconComplete = `fa-regular fa-${icon}`
  return (
    <div className="cardDetalle">
      <div className="paint"></div>
      <i className={iconComplete}></i>
      <h4 className="cardDetalle-title">{ title }</h4>
      <p className="cardDetalle-paragraph">{ description }</p>
    </div>
  )
}