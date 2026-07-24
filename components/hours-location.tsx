import { Clock, MapPin } from 'lucide-react'
import { clinic } from '@/lib/site'

export function HoursLocation() {
  return (
    <section id="horarios" className="scroll-mt-20 bg-[var(--surface)]">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:py-20 lg:grid-cols-2 lg:px-6">
        <div className="flex flex-col gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Horários e localização
            </span>
            <h2 className="mt-3 text-balance font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl">
              Estamos no centro de Pelotas
            </h2>
          </div>

          <div className="rounded-2xl border border-border bg-background p-6">
            <h3 className="flex items-center gap-2 font-serif text-lg font-bold text-foreground">
              <Clock className="size-5 text-primary" />
              Horário de atendimento
            </h3>
            <ul className="mt-4 divide-y divide-border">
              {clinic.hours.map((h) => (
                <li key={h.day} className="flex items-center justify-between py-2.5 text-sm">
                  <span className="text-muted-foreground">{h.day}</span>
                  <span className="font-medium text-foreground">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-background p-6">
            <h3 className="flex items-center gap-2 font-serif text-lg font-bold text-foreground">
              <MapPin className="size-5 text-primary" />
              Endereço
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {clinic.address.street}
              <br />
              {clinic.address.city} — {clinic.address.zip}
            </p>
          </div>
        </div>

        <div className="min-h-[320px] overflow-hidden rounded-2xl border border-border shadow-sm">
          <iframe
            title="Mapa da localização da clínica"
            src={clinic.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full min-h-[320px] w-full"
          />
        </div>
      </div>
    </section>
  )
}
