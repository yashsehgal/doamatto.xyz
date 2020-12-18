import Head from 'next/head'
import { NextSeo } from 'next-seo'

import dynamic from 'next/dynamic'
const Header = dynamic(() => import('../components/header'))

export default function Privacy () {
  return (
        <>
            <Head>
                <title>Imprint - doamatto</title>
            </Head>
            <NextSeo
                title="Imprint - doamatto"
                description="Legal mumbo jumbo that's required by law in some countries."
            />
            <Header title="Imprint" />
            <div className="container">
                <p>
                    <h2>Contact information</h2>
                    Matthew Ronchetto (doamatto)<br/>
                    <b>Email:</b> <a href="mailto:hello@doamatto.xyz">hello [at] doamatto.xyz</a><br/>
                    <b>Phone:</b> <a href="tel:+18583334262">+1 (858) 333-4262</a><br/>
                    <b>Please note:</b> the phone number provided is not for support
                        and purely for legal purposes.
                    <h3>Liability for Links</h3>
                    This website contains links to external websites which may have links to third
                    parties, of which I have no influence or control over the contents of.
                    Therefore, I can’t assume any liability for these external websites. The
                    respective provider or operator of the sites is always responsible for the
                    contents of the linked sites.
                    <h3>Copyright</h3>
                    The contents and works on this website are subject to American copyrights laws
                    and open-source code licenses. Any kind of use outside the limits of copyright
                    laws and code licenses requires the written consent of the respective author
                    or authors.
                </p>
            </div>
        </>
  )
}
