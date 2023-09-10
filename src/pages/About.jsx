import { Header } from "../Header.jsx";
import { Slider } from "../Slider.jsx";
import { Section } from "../Section.jsx";
import { SectionHeader } from "../SectionHeader.jsx";
import { ButtonPrimary } from "../ButtonPrimary.jsx";
import { Footer } from "../Footer.jsx";
import { company } from '../data.json';

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
          <p>{ company.history }</p>
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
          <p className="paragraph">{ company.vision }</p>
        </article>
        <article className="section-container">
          <h3 className="subtitle"><i className="fa-regular fa-rectangles-mixed"></i> Mision</h3>
          <p className="paragraph">{ company.mission }</p>
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