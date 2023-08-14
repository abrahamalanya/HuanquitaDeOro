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
      <Slider></Slider>
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
            Explorar mas productos
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
          <h3 className="sectionParagraph-title">Our mission is to provide the best quality services to our flurry friends</h3>
          <p className="sectionParagraph-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.</p>
          <ButtonPrimary text={"Quiero saber mas"}></ButtonPrimary>
        </article>
      </Section>
      <Section>
        <SectionHeader
          title={"Nuestros Servicios"}
          paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellen sit amet sapien fringilla."} />
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
            <h4 className="cardInfo-title">We’ll take care of your pets</h4>
            <p className="cardInfo-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.</p>
            <ButtonPrimary text={"Discover our services"}></ButtonPrimary>
          </div>
          <img
            className="cardInfo-image"
            src="https://uploads-ssl.webflow.com/64141c3e0a541a198a7ca08f/641470cf1c32e36fcea2b297_qwertyuiop%5B-1.png" />
        </article>
      </Section>
      <Section>
        <SectionHeader
          title={"What our patrons say about us"}
          paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellen sit amet sapien fringilla."} />
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
        logo={"Huanquita de Oro"}></Footer>
    </>
  )
}

export default App
