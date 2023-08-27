import "./CustomIcon.css";

export function CustomIcon({ icon }) {
  const iconComplete = `fa-regular fa-${icon}`;
  return (
    <div className="customIcon">
      <div className="customIcon-paint"></div>
      <i className={iconComplete}></i>
    </div>
  )
}