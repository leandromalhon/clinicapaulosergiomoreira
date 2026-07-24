import { whatsappLink } from '@/lib/site'
import { WhatsappIcon } from '@/components/icons'

export function WhatsappFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:size-16"
    >
      <WhatsappIcon className="size-7 md:size-8" />
      <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-20" />
    </a>
  )
}
