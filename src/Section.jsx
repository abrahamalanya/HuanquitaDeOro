import "./Section.css"

export function Section({ children, classAdd = "" }) {
  const classComplete = `section ${classAdd}`
  return (
    <section className={classComplete}>
      {children}
    </section>
  )
}