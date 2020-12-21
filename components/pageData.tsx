import Head from 'next/head'
import {NextSeo} from 'next-seo'

export default function Page({title,description,content}:{title:string,description:string,content:string}) {
    return(
    <>
        <NextSeo
            title={title}
            description={description}
        />
        <Head>
            <title>{title} - doamatto</title>
        </Head>
        <div className="container">
            <h1 className="header">{title}</h1>
            <section dangerouslySetInnerHTML={{
                __html: content
            }} />
        </div>
    </>
  )
}