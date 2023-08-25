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
        title={"Cuyes Reproductores de Éxito"}
        description={"Somos expertos en cuyes reproductores de alta genética, brindando calidad y éxito a criadores en Huancayo."}
        image={"https://images.unsplash.com/photo-1602580184896-799eb5029eee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"} />
      <Section>
        <SectionHeader
          title={"Sobre Nosotros"} />
      </Section>
      <Section>
        <SectionHeader
          title={"Nuestra Colección de Cuyes"} />
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
            <i className="fa-regular fa-globe icon1"></i>
            <i className="fa-regular fa-globe icon2"></i>
          </div>
          <h3 className="sectionParagraph-title">Nuestro Compromiso con Huancayo</h3>
          <p className="sectionParagraph-paragraph">Nos enorgullece servir a la comunidad de Huancayo como nuestro mercado objetivo principal. Nuestra dedicación a esta ciudad nos permite ofrecer cuyes reproductores de calidad y soporte personalizado a criadores locales y a aquellos que buscan mejorar sus razas.</p>
        </article>
      </Section>
      <Section>
        <SectionHeader
          title={"Testimonios de Nuestros Clientes"}
          paragraph={"Testimonios sinceros que capturan la felicidad que experimentan con nuestros servicios."} />
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
      <Footer
        logo={"Huanquita de Oro"}
        email={"compra@huanquitadeoro.com"}
        phone={"+51 987 675 543"}
        facebook="https://www.facebook.com/profile.php?id=100006171587610"></Footer>
    </>
  )
}

export default App
