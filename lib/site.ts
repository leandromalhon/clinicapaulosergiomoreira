// TODO: replace with the real production domain once it's registered/deployed.
export const siteUrl = 'https://www.clinicapaulosergiomoreira.com.br'

export const clinic = {
  name: 'Clínica Odontológica Dr. Paulo Sérgio I. Moreira',
  shortName: 'Dr. Paulo Sérgio I. Moreira',
  director: 'Dr. Paulo Sérgio I. Moreira',
  cro: 'CRO-RS 26388',
  address: {
    street: 'Rua Santos Dumont, 401 - Centro',
    city: 'Pelotas - RS',
    zip: 'CEP 96020-380',
    full: 'Rua Santos Dumont, 401 - Centro, Pelotas - RS, CEP 96020-380',
  },
  phoneDisplay: '(53) 9 9813-7224',
  phoneRaw: '5553998137224',
  instagram: {
    handle: '@dr.paulosergioimoreira',
    url: 'https://instagram.com/dr.paulosergioimoreira',
  },
  facebook: {
    handle: '/dr.paulosergioimoreira',
    url: 'https://facebook.com/dr.paulosergioimoreira',
  },
  hours: [
    { day: 'Segunda a Sexta', time: '08h–12h e 14h–19h' },
    { day: 'Sábado', time: '08h–12h' },
    { day: 'Domingo', time: 'Fechado' },
  ],
  mapEmbed:
    'https://www.google.com/maps?q=Rua+Santos+Dumont+401+Centro+Pelotas+RS&output=embed',
}

const defaultMessage =
  'Olá! Gostaria de agendar uma consulta na Clínica Dr. Paulo Sérgio I. Moreira.'

export function whatsappLink(message: string = defaultMessage): string {
  return `https://wa.me/${clinic.phoneRaw}?text=${encodeURIComponent(message)}`
}

// Keep in sync with `clinic.hours` above — schema.org needs the lunch-break
// split as two separate weekday specs, so it can't be derived automatically.
export const clinicJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: clinic.name,
  image: `${siteUrl}/images/hero-clinic.png`,
  url: siteUrl,
  telephone: `+${clinic.phoneRaw}`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: clinic.address.street,
    addressLocality: 'Pelotas',
    addressRegion: 'RS',
    postalCode: '96020-380',
    addressCountry: 'BR',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '12:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '14:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '08:00',
      closes: '12:00',
    },
  ],
  sameAs: [clinic.instagram.url, clinic.facebook.url],
}
