import Image from 'next/image'
import { WhatsappCta } from '@/components/whatsapp-cta'

const services = [
  {
    title: 'Urgências',
    description: 'Atendimento para dores e emergências odontológicas.',
    image: '/images/service-emergency.png',
  },
  {
    title: 'Ortodontia',
    description: 'Aparelhos e alinhadores para um sorriso alinhado.',
    image: '/images/service-orthodontics.png',
  },
  {
    title: 'Implantes',
    description: 'Reposição de dentes com implantes fixos e seguros.',
    image: '/images/service-implants.png',
  },
  {
    title: 'Tratamento de Canal',
    description: 'Endodontia para preservar o dente com conforto.',
    image: '/images/service-endodontics.png',
  },
  {
    title: 'Cirurgia Oral',
    description: 'Extrações e pequenas cirurgias com segurança.',
    image: '/images/service-surgery.png',
  },
  {
    title: 'Próteses',
    description: 'Próteses fixas e removíveis sob medida.',
    image: '/images/service-prosthetics.png',
  },
  {
    title: 'Clareamento',
    description: 'Dentes mais brancos com técnicas seguras.',
    image: '/images/service-whitening.png',
  },
  {
    title: 'Limpeza Dental',
    description: 'Profilaxia e prevenção para a saúde bucal.',
    image: '/images/service-cleaning.png',
  },
  {
    title: 'Facetas',
    description: 'Facetas de porcelana para um sorriso natural.',
    image: '/images/service-veneers.png',
  },
]

export function Services() {
  return (
    <section id="servicos" className="scroll-mt-20 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20 lg:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Nossos serviços
          </span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl">
            Especialidades para cada etapa do seu tratamento
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group overflow-hidden rounded-2xl border border-border bg-background transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image || '/placeholder.svg'}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-1.5 p-5">
                <h3 className="font-serif text-xl font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 rounded-2xl border border-border bg-[var(--surface)] px-6 py-8 text-center">
          <h3 className="text-balance font-serif text-2xl font-bold text-foreground">
            Não encontrou o que procura?
          </h3>
          <p className="max-w-md text-sm text-muted-foreground">
            Fale com a nossa equipe e tire suas dúvidas sobre qualquer
            tratamento.
          </p>
          <WhatsappCta size="lg" label="Tire suas dúvidas no WhatsApp" className="mt-2" />
        </div>
      </div>
    </section>
  )
}
