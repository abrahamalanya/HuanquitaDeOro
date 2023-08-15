import { Header } from "./Header.jsx"
import { Slider } from "./Slider.jsx"
import { Section } from "./Section.jsx";
import { SectionHeader } from "./SectionHeader.jsx";
import { Footer } from "./Footer.jsx";
import { Card } from "./Card.jsx";
import { CardDetalle } from "./CardDetalle.jsx";
import { ButtonPrimary } from "./ButtonPrimary.jsx";
import './App.css'
import data from './data.json';

const firstSixServices = data.services.slice(0, 6);
const firstSixProducts = data.products.slice(0, 6);
const testimonials = data.testimonials;

function App() {
  return (
    <>
      <Header></Header>
      <Slider
        title={"Los mejores cuyes de granja del valle del mantaro"}
        description={"El encanto de los cuyes es inigualable, y en Huanquita de Oro, te ofrecemos una experiencia única para tener uno en tu hogar. Nuestra pasión por la crianza responsable y el amor por estos animales nos convierten en tu mejor elección para obtener un cuy de calidad."}
        image={"https://i.postimg.cc/GtHrH4bM/cuy3.png"}/>
      <Section>
        <SectionHeader
          title={"Explora Nuestra Colección de Cuyes"} />
        <section className="sectionGallery">
          {
            firstSixProducts.map((product) => (
              <Card key={product.id}>
                <div className="cardProduct-image">
                  <img src={product.image} />
                </div>
                <h4 className="cardProduct-title">{ product.title }</h4>
                <span className="cardProduct-price">S/ {product.price}</span>
              </Card>
            ))
          }
        </section>
        <section className="sectionLink">
          <a href="#" className="link">
            Explorar mas
            <i className="fa-duotone fa-arrow-right link-icon"></i>
          </a>
        </section>
      </Section>
      <Section>
        <article className="sectionParagraph">
          <div className="backgroundIcon">
            <i className="fa-solid fa-paw-simple icon1"></i>
            <i className="fa-solid fa-paw-simple icon2"></i>
          </div>
          <h3 className="sectionParagraph-title">Comprometidos con el Bienestar</h3>
          <p className="sectionParagraph-paragraph">En Huanquita de Oro, nuestra misión es brindar los servicios de mayor calidad para asegurar el bienestar y la felicidad de nuestros adorables cuyes. Desde la crianza hasta la entrega, nos esforzamos por proporcionar una experiencia excepcional para ti y tus nuevos compañeros peludos. Juntos, creamos un hogar donde la alegría y el cuidado son fundamentales. ¡Bienvenido a un mundo dedicado a la felicidad de nuestros cuyes!.</p>
          <ButtonPrimary text={"Quiero saber mas"}></ButtonPrimary>
        </article>
      </Section>
      <Section>
        <SectionHeader
          title={"Cuidado, Variedad y Compromiso"}
          paragraph={"Nuestra sección de servicios está diseñada para ofrecerte todo lo que necesitas para criar y cuidar a tus cuyes."} />
        <article className="sectionGallery">
          {
            firstSixServices.map((service) => (
              <CardDetalle
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}>
              </CardDetalle>
            ))
          }
        </article>
      </Section>
      <Section>
        <article className="cardInfo">
          <div className="cardInfo-content">
            <h4 className="cardInfo-title">Tu Granja de Cuyes de Confianza</h4>
            <p className="cardInfo-paragraph">Somos tu socio en la crianza de cuyes, ofreciendo cuidado experto y cuyes felices y saludables.</p>
            <ButtonPrimary text={"Contactarse"}></ButtonPrimary>
          </div>
          <img
            className="cardInfo-image"
            src="https://i.postimg.cc/GtHrH4bM/cuy3.png" />
        </article>
      </Section>
      <Section>
        <SectionHeader
          title={"Descubre lo que Nuestros Clientes Aman de Nosotros"}
          paragraph={"Explora testimonios sinceros que capturan la felicidad que nuestros clientes experimentan con nuestros servicios."} />
        <section className="sectionGallery">
          {
            testimonials.map((testimonial) => (
              <Card key={testimonial.id}>
                <div className="card-qualification">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <p className="card-comment">"{testimonial.comment}"</p>
                <span className="card-author">{testimonial.author}</span>
              </Card>
            ))
          }
        </section>
      </Section>
      <Footer
        logo={"Huanquita de Oro"}
        email={"compra@huanquitadeoro.com"}
        phone={"+51 987 675 543"}
        facebook="https://www.facebook.com/profile.php?id=100006171587610"></Footer>
    </>
  )
}

export default App
