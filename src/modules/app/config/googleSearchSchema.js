const baseUrl = process.env.HOST
const organization = 'emah'

const googleSearchSchema = {
  '@context': 'https://schema.org/',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${baseUrl}#organization`,
      name: `${organization}`
    },
    {
      '@type': 'WebSite',
      '@id': `${baseUrl}#website`,
      url: `${baseUrl}`,
      name: `${organization}`,
      publisher: {
        '@id': `${baseUrl}#organization`
      },
      inLanguage: 'es-MX'
    },
    {
      '@type': 'CollectionPage',
      '@id': `${baseUrl}#webpage`,
      url: `${baseUrl}`,
      name: `${organization}`,
      about: {
        '@id': `${baseUrl}#organization`
      },
      isPartOf: {
        '@id': `${baseUrl}#website`
      },
      inLanguage: 'es-MX'
    }
  ]
}

export default googleSearchSchema
