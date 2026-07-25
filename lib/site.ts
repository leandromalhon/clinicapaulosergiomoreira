// Lê a URL real de uma variável de ambiente (NEXT_PUBLIC_SITE_URL), com
// fallback para a URL atual do deploy na Vercel. Quando o domínio definitivo
// (ex: clinicapaulosergiomoreira.com.br) estiver registrado, basta configurar
// essa variável no painel da Vercel — não precisa editar este arquivo.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://clinicapaulosergiomoreira.vercel.app'

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
  // Link de busca do Google Maps a partir do nome + endereço da clínica.
  // TODO: se você tiver o link de "Compartilhar" direto da ficha do Google
  // Meu Negócio (ou o place_id), substitua por ele aqui — é mais preciso.
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Cl%C3%ADnica+Odontol%C3%B3gica+Dr.+Paulo+S%C3%A9rgio+I.+Moreira+Rua+Santos+Dumont+401+Pelotas+RS',
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
