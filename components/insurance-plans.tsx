import Image from 'next/image'
import { WhatsappCta } from '@/components/whatsapp-cta'

const partners = [
  { name: 'PrevPel', src: '/images/conv-prevpel.png' },
  { name: 'Uniodonto', src: '/images/conv-uniodonto.png' },
  { name: 'SindPRS', src: '/images/conv-sinprors.png' },
]

function LogoChip({ name, src }: { name: string; src: string }) {
  return (
    <div className="flex h-16 w-40 shrink-0 items-center justify-center rounded-xl border border-border bg-background px-6 shadow-sm">
      <Image
        src={src}
        alt={name}
        width={120}
        height={40}
        className="h-8 w-auto object-contain grayscale transition-all duration-300 hover:grayscale-0"
      />
    </div>
  )
}

export function InsurancePlans() {
  const loop = [...partners, ...partners, ...partners, ...partners]

  return (
    <section id="convenios" className="scroll-mt-20 bg-[var(--surface)]">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20 lg:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Convênios
          </span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl">
            Consulte a cobertura do seu convênio conosco
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            Atendemos particular e convênios odontológicos selecionados.
          </p>
        </div>

        <div className="relative mt-10 overflow-hidden">
          <div className="flex w-max animate-marquee gap-6">
            {loop.map((partner, i) => (
              <LogoChip key={`${partner.name}-${i}`} name={partner.name} src={partner.src} />
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[var(--surface)] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[var(--surface)] to-transparent" />
        </div>

        <div className="mt-10 flex justify-center">
          <WhatsappCta
            size="lg"
            label="Consulte no WhatsApp"
            message="Olá! Gostaria de saber se meu convênio é atendido na clínica."
          />
        </div>
      </div>
    </section>
  )
}
