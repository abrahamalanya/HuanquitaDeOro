import "./ButtonPrimary.css"

export function ButtonPrimary({ text="Contactar" }) {
  return (
    <button className="button">{ text }</button>
  )
}