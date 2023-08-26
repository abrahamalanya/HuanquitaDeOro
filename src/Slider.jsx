import { ButtonPrimary } from "./ButtonPrimary";
import "./Slider.css"

export function Slider({ title, description, image=""}) {
  return (
    <section className="slider">
      <article className="sliderContent">
        <h2 className="sliderContent-title">{ title }</h2>
        <p className="sliderContent-paragraph">{ description }</p>
        <ButtonPrimary text={ "Contactarse" }></ButtonPrimary>
      </article>
    </section>
  )
}