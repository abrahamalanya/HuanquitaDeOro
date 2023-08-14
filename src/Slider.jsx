import { ButtonPrimary } from "./ButtonPrimary";
import "./Slider.css"

export function Slider() {
  return (
    <section className="slider">
      <article className="sliderContent">
        <h2 className="sliderContent-title">Los mejores cuyes de granja del valle del mantaro</h2>
        <p className="sliderContent-paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolorem perferendis atque autem ab, voluptatibus saepe id natus eius cumque qui doloribus quidem iure, accusamus quae fugit perspiciatis quod numquam.</p>
        <ButtonPrimary text={ "Comprar" }></ButtonPrimary>
      </article>
      <article className="sliderImage">
        <svg className="sliderImage-img" viewBox="0 0 644 495" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M644 495V168.375C644 140.183 636.473 112.503 622.196 88.1931C589.187 
        31.9872 525.105 1.75409 460.736 12.0176L376.671 25.4217C349.458 29.7607 321.626 
        28.087 295.13 20.5183L250.025 7.63385C220.939 -0.674614 190.318 -2.09952 160.586 
        3.47188L141.838 6.98509C115.398 11.9397 91.0744 24.7763 72.0632 43.8084L69.468 
        46.4065C39.3971 76.5105 26.4727 119.714 35.0718 161.386C41.4583 192.336 36.0306 
        224.556 19.8567 251.706L19.2025 252.804C-3.91061 291.601 -5.19823 339.623 15.8026 
        379.604L22.1892 391.763C28.9495 404.633 37.4943 416.483 47.5703 426.962L53.9715 
        433.62C91.6791 472.837 143.736 495 198.14 495H273.828H395.624H499.912H644Z" fill="currentColor"></path>
        </svg>
        <img className="sliderImage-img" src="https://uploads-ssl.webflow.com/64141c3e0a541a198a7ca08f/6418312fc8f533035329a56a_doggy%20optimized.png" />
      </article>
    </section>
  )
}