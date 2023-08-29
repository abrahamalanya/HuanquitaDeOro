import "./SectionHeader.css"

export function SectionHeader({ title, paragraph }) {
  return (
    <article className="sectionHeader">
      <h3 className="subtitle w-80">{ title }</h3>
      <p className="sectionHeader-paragraph">{ paragraph }</p>
    </article>
  )
}