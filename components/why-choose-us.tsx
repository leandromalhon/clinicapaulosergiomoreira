import { Users, HeartHandshake, Stethoscope, MapPin } from 'lucide-react'
import { WhatsappCta } from '@/components/whatsapp-cta'

const reasons = [
  {
    icon: Users,
    title: 'Equipe multidisciplinar',
    description: 'Várias especialidades reunidas em um só lugar.',
  },
  {
    icon: HeartHandshake,
    title: 'Atendimento humanizado',
    description: 'Cuidado próximo e personalizado para cada paciente.',
  },
  {
    icon: Stethoscope,
    title: 'Estrutura moderna',
    description: 'Espaço bem equipado, com raio-x digital e consultórios próprios.',
  },
  {
    icon: MapPin,
    title: 'Localização central',
    description: 'Fácil acesso no centro de Pelotas.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="bg-[var(--surface)]">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20 lg:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Por que nos escolher
          </span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl">
            Motivos para confiar o seu sorriso à nossa equipe
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="flex flex-col gap-3 rounded-2xl border border-border bg-background p-6 transition-shadow hover:shadow-md"
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-secondary text-primary">
                <reason.icon className="size-6" />
              </span>
              <h3 className="font-serif text-lg font-bold text-foreground">
                {reason.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <WhatsappCta size="lg" label="Fale com a gente no WhatsApp" />
        </div>
      </div>
    </section>
  )
}
