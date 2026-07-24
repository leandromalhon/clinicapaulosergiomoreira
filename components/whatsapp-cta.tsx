import { cn } from '@/lib/utils'
import { whatsappLink } from '@/lib/site'
import { WhatsappIcon } from '@/components/icons'

type Props = {
  label?: string
  message?: string
  className?: string
  variant?: 'solid' | 'outline'
  size?: 'default' | 'lg'
}

export function WhatsappCta({
  label = 'Agende pelo WhatsApp',
  message,
  className,
  variant = 'solid',
  size = 'default',
}: Props) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        size === 'lg' ? 'px-7 py-3.5 text-base' : 'px-5 py-2.5 text-sm',
        variant === 'solid'
          ? 'bg-primary text-primary-foreground hover:bg-primary/90'
          : 'border border-primary text-primary hover:bg-primary hover:text-primary-foreground',
        className,
      )}
    >
      <WhatsappIcon className="size-[1.15em]" />
      {label}
    </a>
  )
}
