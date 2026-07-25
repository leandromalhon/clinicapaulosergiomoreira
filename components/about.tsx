import Image from 'next/image'

export function About() {
  return (
    <section id="sobre" className="scroll-mt-20 bg-background">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-6 pb-16 md:pt-8 md:pb-20 lg:grid-cols-2 lg:gap-14 lg:px-6">
        <div className="order-2 overflow-hidden rounded-2xl border border-border shadow-sm lg:order-1">
          <Image
            src="/images/about-facility.png"
            alt="Consultório moderno e organizado da clínica"
            width={640}
            height={520}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="order-1 flex flex-col gap-5 lg:order-2">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            A Clínica
          </span>
          <h2 className="text-balance font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl">
            Cuidado odontológico completo, reunido em um só lugar
          </h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            Somos uma clínica moderna construída em torno do cuidado
            personalizado. Reunimos especialistas de diferentes áreas da
            odontologia em um espaço próprio e bem equipado, no centro de
            Pelotas.
          </p>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            Sob a direção técnica do <strong className="font-semibold text-foreground">Dr. Paulo Sérgio I. Moreira ({''}
            <span className="text-primary">CRO-RS 26388</span>)</strong>, nossa
            proposta é oferecer um atendimento humanizado, próximo e atento a
            cada paciente — do primeiro contato ao acompanhamento do tratamento.
          </p>
          <ul className="mt-2 grid gap-3 sm:grid-cols-2">
            {[
              'Especialistas sob o mesmo teto',
              'Espaço próprio e moderno',
              'Atendimento humanizado',
              'Localização central em Pelotas',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                <span className="mt-1.5 size-2 shrink-0 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
