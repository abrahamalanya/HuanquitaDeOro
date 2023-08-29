import { Header } from "../Header.jsx";
import { Footer } from "../Footer.jsx";
import { Section } from "../Section.jsx";
import { SectionHeader } from "../SectionHeader.jsx";

export function Contact() {
  return (
    <>
      <Header></Header>
      
      <Section classAdd="section-col2">
        <article className="cardImage">
          <img
            src="https://images.unsplash.com/photo-1643883229108-4ed686b10963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80"
            alt=""/>
        </article>
        <article className="cardForm ps-50">
          <SectionHeader title={"Escríbenos un mensaje"} />
          <form action="">
            <label htmlFor="name">Nombre:</label>
            <input type="text" name="name" />
            <label htmlFor="phone">Número de Celular:</label>
            <input type="text" name="phone" />
            <label htmlFor="message">Mensaje:</label>
            <textarea name="message" id="" rows="10"></textarea>
            <input type="submit" className=""/>
          </form>
        </article>
      </Section>
      <Footer></Footer>
    </>
  )
}