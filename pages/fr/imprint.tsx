import Head from 'next/head'
import { NextSeo } from 'next-seo'

import dynamic from 'next/dynamic'
const Header = dynamic(() => import('../../components/header'))

export default function imprint () {
  return (
        <>
            <Head>
                <title>Imprint - doamatto</title>
            </Head>
            <NextSeo
                title="Mentions légales - doamatto"
                description="Le charabia juridique exigé par la loi dans certains pays."
            />
            <Header title="Imprint" />
            <div className="container">
                <p>
                    <h2>Informations de contact</h2>
                    Matthew Ronchetto (doamatto)<br/>
                    <b>E-mail:</b> <a href="mailto:hello@doamatto.xyz">hello [at] doamatto.xyz</a><br/>
                    <b>Tél.:</b> <a href="tel:+18583334262">+1 (858) 333-4262</a><br/>
                    <b>Veuillez noter :</b> le numéro de téléphone fourni n'est pas destiné à
                                            l'assistance et à des fins purement juridiques.
                    <h3>Responsabilité pour les liens</h3>
                    Ce site web contient des liens vers des sites web externes qui peuvent avoir des liens
                    vers des tiers, dont je n'ai aucune influence ni aucun contrôle sur le contenu.
                    Par conséquent, je ne peux pas assumer la responsabilité de ces sites web externes.
                    Le fournisseur ou l'exploitant respectif des sites est toujours responsable du contenu
                    des sites liés.
                    <h3>Copyright</h3>
                    Le contenu et les œuvres de ce site sont soumis aux lois américaines sur
                    les droits d'auteur et les licences de code source libre. Tout type d'utilisation
                    en dehors des limites du droit d'auteur les lois et les licences de code
                    nécessitent le consentement écrit de l'auteur respectif ou des auteurs.
                </p>
            </div>
        </>
  )
}
