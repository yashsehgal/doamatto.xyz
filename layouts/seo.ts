export default {
  canonical: "https://doamatto.xyz",
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://doamatto.xyz',
    description: 'Hello and bienvenue! My name\'s Matt and this is my website.',
    site_name: 'doamatto'
  },
  twitter: {
    handle: '@doamatto',
    site: '@doamatto',
    cardType: 'summary_large_image'
  }
}

export function Post(frontMatter){
  return {
    title: `${frontMatter.title} - doamatto`,
    description: frontMatter.description,
    canonical: "https://doamatto.xyz",
    openGraph: {
      type: 'website',
      title: `${frontMatter.title} - doamatto`,
      description: frontMatter.description
    }
  }
}