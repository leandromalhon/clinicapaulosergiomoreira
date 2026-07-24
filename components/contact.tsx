'use client'

import { useState } from 'react'
import { Phone } from 'lucide-react'
import { clinic, whatsappLink } from '@/lib/site'
import { WhatsappCta } from '@/components/whatsapp-cta'
import { InstagramIcon, FacebookIcon } from '@/components/icons'

export function Contact() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = `Olá! Meu nome é ${name || '—'}.${
      phone ? ` Telefone: ${phone}.` : ''
    } ${message || 'Gostaria de mais informações.'}`
    window.open(whatsappLink(text), '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contato" className="scroll-mt-20 bg-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:py-20 lg:grid-cols-2 lg:gap-14 lg:px-6">
        <div className="flex flex-col gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Contato
            </span>
            <h2 className="mt-3 text-balance font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl">
              Vamos cuidar do seu sorriso?
            </h2>
            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
              Fale com a nossa equipe pelo WhatsApp — é o jeito mais rápido de
              agendar sua consulta e tirar dúvidas.
            </p>
          </div>

          <a
            href={`tel:+${clinic.phoneRaw}`}
            className="flex items-center gap-3 rounded-2xl border border-border bg-[var(--surface)] p-5 transition-colors hover:border-primary"
          >
            <span className="flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Phone className="size-5" />
            </span>
            <span>
              <span className="block text-xs uppercase tracking-wide text-muted-foreground">
                Telefone / WhatsApp
              </span>
              <span className="block font-serif text-xl font-bold text-foreground">
                {clinic.phoneDisplay}
              </span>
            </span>
          </a>

          <WhatsappCta size="lg" />

          <div className="flex items-center gap-3">
            <a
              href={clinic.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da clínica"
              className="flex size-11 items-center justify-center rounded-full border border-border text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <InstagramIcon className="size-5" />
            </a>
            <a
              href={clinic.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook da clínica"
              className="flex size-11 items-center justify-center rounded-full border border-border text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <FacebookIcon className="size-5" />
            </a>
            <span className="text-sm text-muted-foreground">
              {clinic.instagram.handle}
            </span>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 rounded-2xl border border-border bg-[var(--surface)] p-6 md:p-8"
        >
          <p className="text-sm text-muted-foreground">
            Prefere que a gente entre em contato? Deixe sua mensagem.
          </p>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-sm font-medium text-foreground">
              Nome
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="h-11 rounded-lg border border-input bg-background px-3.5 text-sm text-foreground outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20"
              placeholder="Seu nome"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="phone" className="text-sm font-medium text-foreground">
              Telefone
            </label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="h-11 rounded-lg border border-input bg-background px-3.5 text-sm text-foreground outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20"
              placeholder="(53) 9 0000-0000"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-sm font-medium text-foreground">
              Mensagem
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="resize-none rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20"
              placeholder="Como podemos ajudar?"
            />
          </div>
          <button
            type="submit"
            className="h-11 w-full rounded-full bg-primary text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Enviar pelo WhatsApp
          </button>
        </form>
      </div>
    </section>
  )
}
