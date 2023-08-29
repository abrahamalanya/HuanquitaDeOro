import "./Slider.css"

export function Slider({ title, description = "", classAdd = "", children }) {
  const classComplete = `slider ${classAdd}`;

  return (
    <section className={classComplete}>
      <article className="sliderContent">
        <h2 className="title text-center">{title}</h2>
        <p className="sliderContent-paragraph">{ description }</p>
        { children }
      </article>
    </section>
  )
}