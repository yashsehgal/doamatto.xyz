const styles = require('./item.module.scss')

export default function Item ({title,titleUrl,description,url}: {
  title: string
  titleUrl?: string // optional
  description: string
  url: string
}) {
  return (
    <section className={styles.item}>
      <a href={url} title={title}>
        <TitleGen title={title} titleUrl={titleUrl} />
        <p>{description}</p>
      </a>
    </section>
  )
}

function TitleGen({title, titleUrl}) {
  if(titleUrl !== undefined) return (
    <a href={titleUrl} title={title}>
        <h3 className={styles.itemTitle}>{title}</h3>
    </a>
  )
  return (
    <h3 className={styles.itemTitle}>{title}</h3>
  )
}