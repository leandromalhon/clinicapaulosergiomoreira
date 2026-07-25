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
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full bg-primary/95 backdrop-blur transition-shadow duration-300',
        scrolled && 'shadow-[0_16px_32px_-12px_rgba(122,31,43,0.65)]',
      )}
    >
      <div
        className={cn(
          'mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 transition-[height] duration-300 ease-in-out lg:px-6',
          scrolled ? 'h-16 md:h-20' : 'h-20 md:h-28',
        )}
      >
        {/* Logo + nome: posição original à esquerda, colados no topo verticalmente */}
        <a href="#inicio" className="flex items-center gap-3 self-start">
          <Image
            src="/images/logo-header-light.png"
            alt="Clínica Odontológica Dr. Paulo Sérgio I. Moreira"
            width={220}
            height={220}
            priority
            className={cn(
              'w-auto object-contain transition-[height] duration-300 ease-in-out',
              scrolled ? 'h-12 md:h-16' : 'h-16 md:h-24',
            )}
          />
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-sm font-bold text-primary-foreground md:text-lg">
              Dr. Paulo Sérgio I. Moreira
            </span>
            <span className="text-[11px] uppercase tracking-[0.15em] text-primary-foreground/70 md:text-xs">
              Clínica Odontológica
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <WhatsappCta label="Agende pelo WhatsApp" variant="onDark" />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded-md text-primary-foreground lg:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-primary-foreground/15 bg-primary lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3" aria-label="Navegação mobile">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-base font-medium text-primary-foreground/90 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                {item.label}
              </a>
            ))}
            <div className="px-2 py-3">
              <WhatsappCta label="Agende pelo WhatsApp" variant="onDark" className="w-full" />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
