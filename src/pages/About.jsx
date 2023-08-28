import { Header } from "../Header.jsx";
import { Slider } from "../Slider.jsx";
import { Section } from "../Section.jsx";
import { SectionHeader } from "../SectionHeader.jsx";
import { ButtonPrimary } from "../ButtonPrimary.jsx";
import { Footer } from "../Footer.jsx";

export function About() {
  return (
    <>
      <div className="blackCape vh-80"></div>
      <article className="sliderImage vh-80">
        <img className="sliderImage-img" src="https://images.unsplash.com/photo-1643883229108-4ed686b10963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80" />
      </article>
      <Header />
      <Slider
        classAdd={"vh-70"}
        title={"Sobre Nosotros"} />
      <Section>
        <SectionHeader title={"Nuestra historia"} />
        <section className="paragraph">
          <p>Desde los humildes comienzos en el año 2003, "Huanquita de Oro" ha trazado un viaje apasionante y lleno de logros en la industria de la "Crianza de cuyes reproductores". Lo que comenzó como una visión compartida por un pequeño grupo de soñadores, rápidamente se convirtió en una realidad con cada paso firme y audaz que dimos.</p>
          <p>Nuestra fundadora, Evelyn, inspirada por su pasión por la "Crianza de cuyes reproductores", estableció las bases de lo que hoy es una empresa líder reconocida en todo el mundo. Con un equipo de mentes creativas y apasionadas, hemos llevado nuestras ideas al límite, superando obstáculos y desafiando las expectativas.</p>
          <p>A medida que crecíamos, nos dimos cuenta de que nuestra verdadera riqueza radicaba en las relaciones que construíamos con cada cliente, socio y colaborador. Cada paso del camino ha estado marcado por la colaboración y la confianza, y hemos sido testigos de cómo nuestras soluciones han impulsado el éxito de más de [número] de clientes.</p>
          <p>La búsqueda constante de la excelencia ha sido nuestro motor. Nos enorgullecemos de haber alcanzado [número] de premios y reconocimientos, pero nuestro mayor logro es la sonrisa en el rostro de aquellos a quienes servimos. Hemos crecido y evolucionado, adoptando tecnologías innovadoras y abrazando la sustentabilidad en cada aspecto de nuestra operación.</p>
          <p>Pero más allá de los números y las estadísticas, nuestra historia es una historia de pasión, determinación y un compromiso incansable de superar las expectativas. Hemos aprendido que cada desafío es una oportunidad y que cada hito es solo un trampolín hacia el siguiente nivel.</p>
          <p>Hoy, "Huanquita de Oro" se erige como un faro de inspiración para la industria de la "Crianza de cuyes reproductores". Con un equipo dedicado, una base de clientes creciente y una visión audaz hacia el futuro, estamos emocionados por lo que vendrá a continuación en nuestro viaje. Únete a nosotros mientras continuamos creando historias de éxito y dejando una huella duradera en el mundo de la "Crianza de cuyes reproductores".</p>
        </section>
      </Section>
      <Section classAdd={"section-col2"}>
        <article className="vision">
          <i className="fa-regular fa-eye-low-vision"></i>
          <h3>Visión</h3>
          <p>"Ser reconocidos como la referencia líder en genética de cuyes reproductores, impulsando la excelencia en la crianza y fortaleciendo la industria a nivel nacional."</p>
        </article>
        <article className="mission">
          <i className="fa-regular fa-rectangles-mixed"></i>
          <h3>Mision</h3>
          <p>"En Huanquita de Oro, nos dedicamos a proporcionar cuyes reproductores de la más alta calidad, respaldados por genética excepcional y cuidado responsable. Nuestra misión es impulsar el éxito de criadores y amantes de los cuyes, ofreciendo productos que transforman la cría y contribuyen al bienestar de estos adorables animales. A través de nuestro enfoque en la innovación, la ética y la satisfacción del cliente, trabajamos para elevar los estándares de la industria y fomentar una comunidad de criadores comprometidos con la excelencia."</p>
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