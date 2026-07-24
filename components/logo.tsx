import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'flex aspect-square items-center justify-center rounded-full border-2 border-primary text-primary',
        className,
      )}
      aria-hidden="true"
    >
      <span className="font-serif text-[0.95em] font-bold leading-none tracking-tight">
        PM
      </span>
    </span>
  )
}
