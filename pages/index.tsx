import Head from 'next/head'
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import {
  getLocalizationProps,
  languageProvider as LanguageProvider,
} from "../i18n/languageContext";
import { Localizations } from "../i18n/types";

const styles = require('./index.module.scss')

// export default function Home () {
//   return (
//     <>
//       <Head>
//         <title>doamatto</title>
//       </Head>
//       <main className={styles.main}>
//         <div>
//           <h1 className={styles.title}>
//             Hi!<br/> I&apos;m Matt Ronchetto.
//           </h1>
//           <img src="/assets/photo.jpeg" alt="Photo of Matt Ronchetto" width="320" height="320"/>
//         </div>
//       </main>
//     </>
//   )
// }

const index: NextPage<{ localization: Localizations }> = ({ localization }) => (
  <LanguageProvider localization={localization}>
    <Head>
        <title>doamatto</title>
      </Head>
      <main className={styles.main}>
        <div>
          <h1 className={styles.title}>
            Hi!<br/> I&apos;m Matt Ronchetto.
          </h1>
          <img src="/assets/photo.jpeg" alt="Photo of Matt Ronchetto" width="320" height="320"/>
        </div>
      </main>
  </LanguageProvider>
)

export const getStaticProps: GetStaticProps = async (ctx) => {
  const localization = getLocalizationProps(ctx, "home");
  return {
    props: {
      localization
    }
  }
};
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: ["en", "fr"].map((lang) => ({ params: { lang } })),
    fallback: false
  }
};

export default index