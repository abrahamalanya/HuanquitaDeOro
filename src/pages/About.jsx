import { Header } from "../Header.jsx";
import { Section } from "../Section.jsx";
import { SectionHeader } from "../SectionHeader.jsx";
import { ButtonPrimary } from "../ButtonPrimary.jsx";
import { Footer } from "../Footer.jsx";

export function About() {
  return (
    <>
      <div className="blackCape vh-10"></div>
      <Header />
      <Section>
        <SectionHeader title={"Sobre Nosotros"} />
        <section>
          <p>Desde los humildes comienzos en el año 2003, "Huanquita de Oro" ha trazado un viaje apasionante y lleno de logros en la industria de la "Crianza de cuyes reproductores". Lo que comenzó como una visión compartida por un pequeño grupo de soñadores, rápidamente se convirtió en una realidad con cada paso firme y audaz que dimos.</p>
          <p>Nuestra fundadora, Evelyn, inspirada por su pasión por la "Crianza de cuyes reproductores", estableció las bases de lo que hoy es una empresa líder reconocida en todo el mundo. Con un equipo de mentes creativas y apasionadas, hemos llevado nuestras ideas al límite, superando obstáculos y desafiando las expectativas.</p>
          <p>A medida que crecíamos, nos dimos cuenta de que nuestra verdadera riqueza radicaba en las relaciones que construíamos con cada cliente, socio y colaborador. Cada paso del camino ha estado marcado por la colaboración y la confianza, y hemos sido testigos de cómo nuestras soluciones han impulsado el éxito de más de [número] de clientes.</p>
          <p>La búsqueda constante de la excelencia ha sido nuestro motor. Nos enorgullecemos de haber alcanzado [número] de premios y reconocimientos, pero nuestro mayor logro es la sonrisa en el rostro de aquellos a quienes servimos. Hemos crecido y evolucionado, adoptando tecnologías innovadoras y abrazando la sustentabilidad en cada aspecto de nuestra operación.</p>
          <p>Pero más allá de los números y las estadísticas, nuestra historia es una historia de pasión, determinación y un compromiso incansable de superar las expectativas. Hemos aprendido que cada desafío es una oportunidad y que cada hito es solo un trampolín hacia el siguiente nivel.</p>
          <p>Hoy, "Huanquita de Oro" se erige como un faro de inspiración para la industria de la "Crianza de cuyes reproductores". Con un equipo dedicado, una base de clientes creciente y una visión audaz hacia el futuro, estamos emocionados por lo que vendrá a continuación en nuestro viaje. Únete a nosotros mientras continuamos creando historias de éxito y dejando una huella duradera en el mundo de la "Crianza de cuyes reproductores".</p>
        </section>
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