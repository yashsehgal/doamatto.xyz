import { parseISO, format } from 'date-fns'

export default function pageData ({ children, frontMatter }: {children: any, frontMatter: any}) {
  const title = frontMatter.title
  const date = frontMatter.date
  return (
      <>
        <div className="content">
          <h1 className="header">{title}</h1>
          <p className="minor">{frontMatter.readingTime.text}{' • '}{format(parseISO(date), 'MMMM dd, yyyy')}</p>
          <section>
            {children}
          </section>
        </div>
      </>
  )
}
