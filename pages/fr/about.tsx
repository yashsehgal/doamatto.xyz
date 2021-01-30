import Head from 'next/head'
import { NextSeo } from 'next-seo'
// import { SpotifyAlbumWidget } from '../node_modules/nextjs-widgets/src/index'

import dynamic from 'next/dynamic'
const Header = dynamic(() => import('@/components/header'))

export default function Home () {
  return (
    <>
      <NextSeo
        title="À propos de doamatto"
        description="I'm a very interesting person, to say the least."
      />
      <Head>
        <title>À propos de doamatto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="About" />
      <div className="container">
          <p>
              <b>Hello and bienvenue! Je m'appelle Matt Ronchetto.</b> Je suis un lycéen
              dans la Californie ensoleillée qui adore fabriquer des logiciels qui fonctionne
              et qui a fière allure et d'expérimenter autant que possible.
              <br/><br/>
              J'aime aussi faire de la conception graphique, du développement web,
              du montage A/V et écouter un large éventail de musique.
              Je me suis intéressé à:
              <ul>
                  <li>Homelabbing,</li>
                  <li>Le noyau Linux et les distributions Linux,</li>
                  <li>iPods,</li>
                  <li>La course de la Forumla, et :</li>
                  <li>Formes de médias sans perte.</li>
              </ul>

              <h2>Contributions notables</h2>
              <ul>
                <li>Un thème pour Jekyll appelé Nano (<LearnMore href="https://git.doamatto.xyz/nano"/>)</li>
                <li>Environ 200 ajouts à PrivacySpy (<LearnMore href="https://privacyspy.org"/>)</li>
                <li>Un plugin ESlint pour Gulp (<LearnMore href="https://github.com/doamatto/gulp-eslint"/>)</li>
                <li>L'application de méditation Mello (<LearnMore href="https://github.com/mello-app"/>)</li>
              </ul>

              <h2>En dehors du "travail" et du travail</h2>
              <p>
                Pendant mon temps libre, j'aime expérimenter avec le matériel (comme Raspberry Pis
                et Arduinos) et les langues de programmations (comme Dart, Elm et GraphQL).
                J'ai gagné un grand intérêt dans la course au Forumla, avec un de mes morceaux préférés
                être <a href="https://en.wikipedia.org/wiki/Albert_Park_Circuit">le circuit de l'Albert Park's.</a>
                <br/><br/>
                J'ai une dépendance paralysante à la musique de la meilleure façon possible. J'écoute
                à des choses aussi populaires que les nouveaux tubes du Billboard 100
                à une niche comme des groupes indépendants de pays étrangers. En ce moment,
                je me suis plongé dans beaucoup de musiques du Japon. Mon album préféré en ce moment est
                the soundtrack la bande sonore du spectacle «BNA» de Netflix, spécifiquement
                "NIGHT RUNNING" (les deux versions), “Ready to” et “Wish”.
                { /* <SpotifyAlbumWidget albumId="5ZCo1wqpAvjgHieipwTXzZ" token="BQDcCTbvOWWyzt1gCumc6MxlDYeiE1liO4sfaLJsefx1yMXW2pWht7mhHIQs4Qxvb8U7JoI6PmM4Z5puyoVbuVGacRQmYJx53bpWW1WWICVQHq8LfDV3Q3jKTk8moZ7pvV_fBGXT6TPu7wM_FzShyoKMRCNqQa436u8"/> */ }
                <br/><br/>
                J'aime m'améliorer et, grâce à cela, j'ai appris beaucoup de choses.
                Il y a des choses cool que j'ai apprises :
                <ul>
                  <li>
                    Environ 90 mots par minute sur <a href="https://workmanlayout.org/">la mise en page Workman</a> en
                    un mois environ (je peux faire environ 140 mots par minute sur QWERTY)
                  </li>
                  <li>
                    J'apprends actuellement le japonais comme troisième langue (ma langue maternelle est l'anglais,
                    et j'ai appris une bonne partie du français).
                  </li>
                  <li>
                    Utiliser Garageband comme prévu (pour faire de la musique et/ou des bandes sonores)
                  </li>
                  <li>
                    Apprend actuellement Dart (pour utilisation avec Flutter), Rust, C#
                    (pour utilisation avec KSP), et Kotlin (pour utilisation avec Flutter)
                  </li>
                </ul>
              </p>

              <h2>Divers</h2>
              <p>
                Vous pouvez me trouver sur ces sites (tout le reste n'est probablement pas moi):
                <ul>
                  <li><a href="https://be.net/doamatto">Behance comme @doamatto</a></li>
                  <li><a href="https://github.com/doamatto">GitHub comme @doamatto</a></li>
                  <li><a href="https://keybase.io/doamatto">Keybase comme @doamatto</a></li>
                  <li><a href="https://twitter.com/doamatto">Twitter comme @doamatto</a></li>
                </ul>
              </p>
          </p>
      </div>
    </>
  )
}

export function LearnMore ({ href }: {href: string}) {
  return (
    <a href={href}>Learn more &rarr;</a>
  )
}
