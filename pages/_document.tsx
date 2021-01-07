import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from 'next/document'

export default class _document extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return {...initialProps}
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet"
                href="https://cdn.doamatto.xyz/inter.min.css"
                type="text/css" />
          <meta name="ocs-site-verification" content="93595f861998e6fd066083de16af45e1"></meta>
          <meta name="wot-verification" content="5140a65b9981fa17e2f8"></meta>
          
          <link rel="icon" href="/assets/logo.svg"/>
          <link rel="shortcut icon" href="/assets/logo.svg"/>
          <link rel="apple-touch-icon" href="/assets/logo-bg.svg"/>

          <link rel="author" href="humans.txt"/>
        </Head>
        <body>
          <div className="container" id="mainContent">
            <Main />
            <NextScript />
          </div>
        </body>
      </Html>
    )
  }
}