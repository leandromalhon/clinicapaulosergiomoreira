import Image from 'next/image'

const team = [
  {
    name: 'Dr. Paulo Sérgio I. Moreira',
    role: 'Diretor Técnico',
    specialty: 'Cirurgia Oral Menor, Ortodontia',
    cro: 'CRO-RS 26388',
    image: '/images/team-paulo.png',
  },
  {
    name: 'Dr. Thiago',
    role: 'Especialista',
    specialty: 'Implantodontia',
    image: '/images/team-thiago.png',
  },
  {
    name: 'Dr. José Antônio',
    role: 'Especialista',
    specialty: 'Endodontia',
    image: '/images/team-jose.png',
  },
  {
    name: 'Dr. Tiago',
    role: 'Especialista',
    specialty: 'Periodontia',
    image: '/images/team-tiago.png',
  },
]

export function Team() {
  return (
    <section id="equipe" className="scroll-mt-20 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20 lg:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Nossa equipe
          </span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl">
            Especialistas dedicados ao seu cuidado
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <article
              key={member.name}
              className="overflow-hidden rounded-2xl border border-border bg-background transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
                <Image
                  src={member.image || '/placeholder.svg'}
                  alt={`Retrato de ${member.name}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-1 p-5">
                <h3 className="font-serif text-lg font-bold text-foreground">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-primary">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.specialty}</p>
                {member.cro && (
                  <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
                    {member.cro}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
