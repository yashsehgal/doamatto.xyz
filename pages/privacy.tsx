import Head from 'next/head'
import { NextSeo } from 'next-seo'

import dynamic from 'next/dynamic'
const Header = dynamic(() => import('@/components/header'))

export default function privacy () {
  return (
    <>
      <NextSeo
        title="Privacy - doamatto"
        description="Your privacy is just as important (if not more) than my privacy. Here's how I protect yours."
      />
      <Head>
        <title>Privacy - doamatto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="Privacy Policy" />
      <div className="container">
        <p>
            Your privacy is just as important (if not more) than my privacy. For that reason, I make it a commitment to ensure my site isn&apos;t privacy-friendly, but private-by-default.
        </p>
        <h3>What data is collected?</h3>
        <p>
            I do not collect any personally identifiable information (PII). I utilise the "Accept-Language" to provide a more personalised version of the website.
        </p>
        <h3>Why is this data collected/used?</h3>
        <p>
            Using your Accept-Language header, I can display the website in a language that you might be able to understand. If you're browser doesn't report either French or Japanese, then it defaults to English.
        </p>
        <h3>What data is shared, sold, or transfered?</h3>
        <p>
            I do not share, sell, or transfer any data collected with any third-parties. I am not responsible with who Vercel shares data with. This is outlined in their privacy policy <a href="https://vercel.com/legal/privacy-policy">here.</a>
        </p>
        <h3>Who has access to this data?</h3>
        <p>            
            Governments or law enforcement may request data from Vercel, to which I have no control over. Per their privacy policy as of writing, they will provide data &quot;when [they] have a good faith belief it is
            required by law, such as pursuant to a subpoena, warrant or other judicial or administrative order.&quot; You can read more&nbsp; <a href="https://vercel.com/legal/privacy-policy">here.</a>
        </p>
        <h3>Who processes this data?</h3>
        <p>
            The data is processed by the following parties:
            <ul>
                <li>
                    <b>Vercel and their subprocessors: </b>They host the site. They do not mention, as of writing, who powers their services.
                </li>
            </ul>
        </p>
        <h3>What if there&apos;s a data breach?</h3>
        <p>
            In the event of a data breach at Vercel, I cannot do anything to notify users as I do not collect identifiable data. I will leave a banner on the website to still spread awareness of such, however.
        </p>
        <h3>Where can I find past versions of this policy?</h3>
        <p>
            This site&apos;s codebase is hosted publicly on GitHub. You can check the list of changes to this policy <a href="https://git.io/JLnah">here.</a>
        </p>
        <h3>Contact</h3>
        <p>
            You can write to <a href="mailto:hello@doamatto.xyz>">hello [at] doamatto.xyz</a> to get help as swiftly as possible on amending and fixing this document, as well as get answers to questions regarding this policy.
        </p>
      </div>
    </>
  )
}
