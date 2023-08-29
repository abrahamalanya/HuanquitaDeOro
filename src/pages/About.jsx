import { Header } from "../Header.jsx";
import { Slider } from "../Slider.jsx";
import { Section } from "../Section.jsx";
import { SectionHeader } from "../SectionHeader.jsx";
import { ButtonPrimary } from "../ButtonPrimary.jsx";
import { Footer } from "../Footer.jsx";

export default function About() {
  return (
    <>
      <div className="blackCape vh-70"></div>
      <article className="sliderImage vh-70">
        <img className="sliderImage-img" src="https://images.unsplash.com/photo-1643883229108-4ed686b10963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80" />
      </article>
      <Header classAdd={ "text-white" }/>
      <Slider
        classAdd={"vh-60"}
        title={"Sobre Nosotros"} />
      <SectionHeader title={"Nuestra historia"} />
      <Section classAdd={"section-col2"}>
        <article className="paragraph pe-20">
          <p>Desde los humildes comienzos en el año 2003, "Huanquita de Oro" ha trazado un viaje apasionante y lleno de logros en la industria de la "Crianza de cuyes reproductores". Lo que comenzó como una visión compartida por un pequeño grupo de soñadores, rápidamente se convirtió en una realidad con cada paso firme y audaz que dimos.</p>
          <p>Nuestra fundadora, Evelyn, inspirada por su pasión por la "Crianza de cuyes reproductores", estableció las bases de lo que hoy es una empresa líder reconocida en todo el mundo. Con un equipo de mentes creativas y apasionadas, hemos llevado nuestras ideas al límite, superando obstáculos y desafiando las expectativas.</p>
        </article>
        <article className="gallery">
          <img src="https://images.unsplash.com/photo-1643883229108-4ed686b10963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80"
            alt=""
            className="gallery-img1"/>
          <img src="https://images.unsplash.com/photo-1643883229108-4ed686b10963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80"
            alt=""
            className="gallery-img2"/>
          <img src="https://images.unsplash.com/photo-1643883229108-4ed686b10963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80"
            alt=""
            className="gallery-img3"/>
          <img src="https://images.unsplash.com/photo-1643883229108-4ed686b10963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80"
            alt=""
            className="gallery-img4"/>
          <img src="https://images.unsplash.com/photo-1643883229108-4ed686b10963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80"
            alt=""
            className="gallery-img5"/>
        </article>
      </Section>
      <Section classAdd={"section-col2"}>
        <article className="section-container">
          <h3 className="subtitle"><i className="fa-regular fa-eye-low-vision"></i> Visión</h3>
          <p className="paragraph">"Ser reconocidos como la referencia líder en genética de cuyes reproductores, impulsando la excelencia en la crianza y fortaleciendo la industria a nivel nacional."</p>
        </article>
        <article className="section-container">
          <h3 className="subtitle"><i className="fa-regular fa-rectangles-mixed"></i> Mision</h3>
          <p className="paragraph">"En Huanquita de Oro, nos dedicamos a proporcionar cuyes reproductores de la más alta calidad, respaldados por genética excepcional y cuidado responsable. Nuestra misión es impulsar el éxito de criadores y amantes de los cuyes, ofreciendo productos que transforman la cría y contribuyen al bienestar de estos adorables animales. A través de nuestro enfoque en la innovación, la ética y la satisfacción del cliente, trabajamos para elevar los estándares de la industria y fomentar una comunidad de criadores comprometidos con la excelencia."</p>
        </article>
      </Section>
      <Section>
        <article className="cardInfo">
          <div className="cardInfo-content">
            <h4 className="cardInfo-title">Tu Granja de Cuyes de Confianza</h4>
            <p className="cardInfo-paragraph">Somos tu socio en la crianza de cuyes, ofreciendo cuidado experto y cuyes felices y saludables.</p>
            <ButtonPrimary />
          </div>
          <img
            className="cardInfo-image"
            src="https://i.postimg.cc/GtHrH4bM/cuy3.png" />
        </article>
      </Section>
      <Footer />
    </>
  )
}