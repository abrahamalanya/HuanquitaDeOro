import { CustomIcon } from "./CustomIcon";
import "./CardDetalle.css";

export function CardDetalle({ icon, title, description }) {
  return (
    <div className="cardDetalle">
      <CustomIcon icon={icon} />
      <h4 className="cardDetalle-title">{ title }</h4>
      <p className="cardDetalle-paragraph">{ description }</p>
    </div>
  )
}