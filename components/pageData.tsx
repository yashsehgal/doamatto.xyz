import Head from 'next/head'
import {NextSeo} from 'next-seo'
import {parseISO, format} from 'date-fns'

export default function pageData({children, frontMatter}: {children: any, frontMatter: any}) {
    var title = frontMatter.title,
        description = frontMatter.description,
        date = frontMatter.date
    return(
      <>
        <NextSeo
          title={title}
          description={description}
        />
        <Head>
            <title>{title} - doamatto</title>
        </Head>
        <div className="content">
          <h1 className="header">{title}</h1>
          <p className="minor">{frontMatter.readingTime.text}{` • `}{format(parseISO(date), 'MMMM dd, yyyy')}</p>
          <section>
            {children}
          </section>
        </div>
      </>
    )
  }