import { Header } from "./Header.jsx"
import { Slider } from "./Slider.jsx"
import { Section } from "./Section.jsx";
import { SectionHeader } from "./SectionHeader.jsx";
import { Footer } from "./Footer.jsx";
import { Card } from "./Card.jsx";
import { ButtonPrimary } from "./ButtonPrimary.jsx";
import './App.css'

function App() {
  return (
    <>
      <Header></Header>
      <Slider></Slider>
      <Section>
        <SectionHeader
          title={"Nuestros Servicios"}
          paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellen sit amet sapien fringilla."} />
        <article className="sectionGallery">
          <Card>
            <i class="fa-regular fa-dog"></i>
            <h4 className="card-title">Venta</h4>
            <p className="card-paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </Card>
          <Card>
            <i class="fa-regular fa-dog"></i>
            <h4 className="card-title">Venta</h4>
            <p className="card-paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </Card>
          <Card>
            <i class="fa-regular fa-dog"></i>
            <h4 className="card-title">Venta</h4>
            <p className="card-paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </Card>
          <Card>
            <i class="fa-regular fa-dog"></i>
            <h4 className="card-title">Venta</h4>
            <p className="card-paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </Card>
          <Card>
            <i class="fa-regular fa-dog"></i>
            <h4 className="card-title">Venta</h4>
            <p className="card-paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </Card>
          <Card>
            <i class="fa-regular fa-dog"></i>
            <h4 className="card-title">Venta</h4>
            <p className="card-paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </Card>
        </article>
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
          <Card>
            <div className="card-qualification">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <p className="card-comment">"Lorem ipsum dolor, sit amet consectetur adipisicing elit."</p>
            <span className="card-author">Abraham Alanya</span>
          </Card>
          <Card>
            <div className="card-qualification">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <p className="card-comment">"Lorem ipsum dolor, sit amet consectetur adipisicing elit. amet consectetur adipisicing elit."</p>
            <span className="card-author">Joe Doe</span>
          </Card>
          <Card>
            <div className="card-qualification">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <p className="card-comment">"Lorem ipsum doloramet consectetur adipisicing elit.amet consectetur adipisicing elit., sit amet consectetur adipisicing elit."</p>
            <span className="card-author">Maria de Jesus</span>
          </Card>
        </section>
      </Section>
      <Section>
        <SectionHeader
          title={"Check out our popular products"} />
        <section className="sectionGallery">
          <Card>
            <img
              className="cardProduct-image"
              src="https://uploads-ssl.webflow.com/6414640d6e0e2d7af389e640/641899002cc5b4702a5ec849_pet-accessories-still-life-concept-with-pet-dry-food-p-500.jpg" />
            <h4 className="cardProduct-title">Cuy macho grande</h4>
            <span className="cardProduct-price">$ 20.00 USD</span>
          </Card>
          <Card>
            <img
              className="cardProduct-image"
              src="https://uploads-ssl.webflow.com/6414640d6e0e2d7af389e640/641899002cc5b4702a5ec849_pet-accessories-still-life-concept-with-pet-dry-food-p-500.jpg" />
            <h4 className="cardProduct-title">Cuy macho grande</h4>
            <span className="cardProduct-price">$ 20.00 USD</span>
          </Card>
          <Card>
            <img
              className="cardProduct-image"
              src="https://uploads-ssl.webflow.com/6414640d6e0e2d7af389e640/641899002cc5b4702a5ec849_pet-accessories-still-life-concept-with-pet-dry-food-p-500.jpg" />
            <h4 className="cardProduct-title">Cuy macho grande</h4>
            <span className="cardProduct-price">$ 20.00 USD</span>
          </Card>
        </section>
        <section className="sectionLink">
          <a href="#" className="link">
            Explorar mas productos
            <i className="fa-duotone fa-arrow-right link-icon"></i>
          </a>
        </section>
      </Section>
      <Footer
        logo={"Huanquita de Oro"}></Footer>
    </>
  )
}

export default App
