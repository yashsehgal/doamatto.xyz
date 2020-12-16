import Head from 'next/head'

import dynamic from 'next/dynamic'
const Navigation = dynamic(() => import('../components/nav'))
const Header = dynamic(() => import('../components/header'))

export default function Home() {
  return (
    <>
      <Head>
        <title>Privacy policy - doamatto.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Header title="Privacy Policy" />
      <div className="container">
        <p>
            Your privacy is just as important (if not more) than my privacy.
            For that reason, I make it a commitment to ensure my site isn't
            privacy-friendly, but private-by-default.
        </p>
        <h3>What data is collected?</h3>
        <p>
          I do not collect any personally identifiable information (PII). I
          utilise Vercel's Analytics tool which collects the following data:
          <table>
                <thead>
                    <tr>
                        <td>Data collected</td>
                        <td>Example of data</td>  
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Page</td>
                        <td>/blog/[slug]</td>
                    </tr>
                        <tr>
                            <td>URL</td>
                            <td>/blog/test-post</td>
                        </tr>
                        <tr>
                            <td>Network speed</td>
                            <td>4g (or slow-2g, 2g, 3g, 5g)</td>
                        </tr>
                        <tr>
                            <td>Browser</td>
                            <td>Chrome 86 (Blink)</td>
                        </tr>
                        <tr>
                            <td>Device type</td>
                            <td>Mobile (or Desktop/Tablet)</td>
                        </tr>
                        <tr>
                            <td>Device OS</td>
                            <td>Android 10</td>
                        </tr>
                        <tr>
                            <td>Country (ISO 3166-1)</td>
                            <td>US</td>
                        </tr>
                        <tr>
                            <td>Web vital</td>
                            <td>FCP 1.0s</td>
                        </tr>
                        <tr>
                        <td>Server-receieved event time</td>
                        <td>2020-10-29 09:06:30</td>
                    </tr>
                </tbody>
            </table> 
        </p>
        <h3>Why is this data collected?</h3>
        <p>
            This data is collected to better understand issues with my website
            and fix them before going to a production-level.
        </p>
        <h3>What data is shared, sold, or transfered?</h3>
        <p>
            I do not share, sell, or transfer any data collected with any
            third-parties. I am not responsible with who Vercel shares data
            with. This is outlined in their privacy policy
            &nbsp; <a href="https://vercel.com/legal/privacy-policy">here.</a>
        </p>
        <h3>Who has access to this data?</h3>
        <p>
            I have access to this data on an aggregated basis via the Vercel
            dashboard. Governments may request this data via Vercel, to which
            I have no control over. Per their privacy policy as of writing,
            they will provide data "when [they] have a good faith belief it is
            required by law, such as pursuant to a subpoena, warrant or other
            judicial or administrative order." You can read more
            &nbsp; <a href="https://vercel.com/legal/privacy-policy"> here.</a>
        </p>
        <h3>Who processes this data?</h3>
        <p>
            The data is processed by the following parties:
            <ul>
                <li>
                    <b>Myself: </b>I have access to aggregated statistics and use 
                    them to better the website's speed and performance.
                </li>
                <li>
                    <b>Vercel and their subprocessors: </b>They host the site and
                    the analytics tool. They do not mention, as of writing, who
                    powers their services.
                </li>
            </ul>
        </p>
        <h3>What if there's a data breach?</h3>
        <p>
            In the event of a data breach at Vercel that may affect analytical data,
            I cannot do anything to notify users as I do not collect identifiable data,
            nor do I have access to such via Vercel Analytics to notify users.
        </p>
        <h3>Where can I find past versions of this policy?</h3>
        <p>
            This site's codebase is hosted publicly on GitHub. You can check the list
            of changes to this policy <a href="https://git.io/JLnah">here.</a>
        </p>
        <h3>Contact</h3>
        <p>
            You can write to <a href="mailto:hello@doamatto.xyz>">hello [at]
            doamatto.xyz</a> to get help as swiftly as possible on amending and fixing
            this document, as well as get answers to questions regarding this policy.
        </p>
      </div>
    </>
  )
}
