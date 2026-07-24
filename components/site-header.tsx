'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { WhatsappCta } from '@/components/whatsapp-cta'

const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'A Clínica', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Convênios', href: '#convenios' },
  { label: 'Equipe', href: '#equipe' },
  { label: 'Contato', href: '#contato' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full border-b border-transparent bg-background/95 backdrop-blur transition-shadow',
        scrolled && 'border-border shadow-sm',
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:h-20 lg:px-6">
        <a href="#inicio" className="flex items-center gap-3 self-start">
          <Image
            src="/images/logo-header.png"
            alt="Clínica Odontológica Dr. Paulo Sérgio I. Moreira"
            width={220}
            height={220}
            priority
            className="-mt-1 h-16 w-auto object-contain md:-mt-2 md:h-20"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-sm font-bold text-foreground md:text-base">
              Dr. Paulo Sérgio I. Moreira
            </span>
            <span className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
              Clínica Odontológica
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <WhatsappCta label="Agende pelo WhatsApp" />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded-md text-foreground lg:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3" aria-label="Navegação mobile">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-base font-medium text-foreground/85 transition-colors hover:bg-secondary hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            <div className="px-2 py-3">
              <WhatsappCta label="Agende pelo WhatsApp" className="w-full" />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
