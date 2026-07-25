import Image from 'next/image'
import { clinic } from '@/lib/site'
import { InstagramIcon, FacebookIcon } from '@/components/icons'

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-[var(--surface)]">
      <div aria-hidden className="absolute inset-x-0 top-0 h-8 bg-primary md:h-10" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-2 px-4 pb-8 pt-8 lg:px-6 md:pt-10">
        <div className="flex flex-col gap-4 md:min-h-28 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3 self-start md:self-start">
            <Image
              src="/images/logo-header.png"
              alt="Clínica Odontológica Dr. Paulo Sérgio I. Moreira"
              width={220}
              height={220}
              className="-mt-1.5 h-16 w-auto object-contain md:-mt-2 md:h-20"
            />
            <span className="flex flex-col justify-center leading-tight">
              <span className="font-serif text-base font-bold text-foreground">
                Dr. Paulo Sérgio I. Moreira
              </span>
              <span className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                Clínica Odontológica
              </span>
            </span>
          </div>

          <div className="text-sm leading-relaxed text-muted-foreground md:text-right">
            <p>{clinic.address.street}</p>
            <p>
              {clinic.address.city} — {clinic.address.zip}
            </p>
            <p className="mt-2 text-primary">
              Direção técnica: {clinic.director} — {clinic.cro}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={clinic.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da clínica"
              className="flex size-10 items-center justify-center rounded-full border border-border text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <InstagramIcon className="size-5" />
            </a>
            <a
              href={clinic.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook da clínica"
              className="flex size-10 items-center justify-center rounded-full border border-border text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <FacebookIcon className="size-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-border pt-3 text-center text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {clinic.name}. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
