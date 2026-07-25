import Image from "next/image";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { WhatsappCta } from "@/components/whatsapp-cta";

export function Hero() {
  return (
    <section id="inicio" className="scroll-mt-20 bg-background">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-8 pb-10 md:pt-12 md:pb-14 lg:grid-cols-[1fr_1.35fr] lg:gap-12 lg:px-6">
        <div className="flex min-w-0 flex-col items-start gap-6 text-center lg:text-left">
          <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/20 bg-secondary px-4 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-primary lg:mx-0">
            Odontologia no centro de Pelotas
          </span>
          <h1 className="break-words font-serif text-4xl font-bold leading-[1.1] text-foreground md:text-5xl lg:text-5xl xl:text-6xl">
            Uma equipe multidisciplinar dedicada ao seu sorriso
          </h1>
          <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Especialistas de diferentes áreas reunidos sob o mesmo teto, em um
            espaço próprio e moderno, com atendimento próximo e personalizado no
            coração de Pelotas.
          </p>
          <div className="flex w-full flex-col items-center gap-3 sm:flex-row lg:items-start">
            <WhatsappCta
              size="lg"
              label="Agendar Consulta"
              className="w-full whitespace-nowrap sm:w-auto"
            />
            <a
              href="#servicos"
              className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-full border border-border px-7 py-3.5 text-base font-medium text-foreground transition-colors hover:border-primary hover:text-primary sm:w-auto"
            >
              Ver Especialidades
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 lg:justify-start">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/40 px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
              <MapPin className="size-3.5 text-primary" />
              Centro de Pelotas
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/40 px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
              <Clock className="size-3.5 text-primary" />
              Seg–Sex 8h–19h · Sáb 8h–12h
            </span>
            <a
              href="#horarios"
              className="inline-flex items-center gap-1 rounded-full px-3.5 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-secondary/40"
            >
              Horários completos
              <ArrowRight className="size-3.5" />
            </a>
          </div>
        </div>

        <div className="relative min-w-0">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border shadow-sm">
            <Image
              src="/images/hero-clinic.png"
              alt="Fachada da Clínica Odontológica Dr. Paulo Sérgio I. Moreira, em Pelotas"
              width={1200}
              height={900}
              priority
              className="h-full w-full object-cover"
              style={{ objectPosition: "10% center" }}
            />
          </div>
          <div className="absolute -bottom-4 left-4 rounded-xl border border-border bg-background px-5 py-3 shadow-md sm:left-6">
            <p className="font-serif text-lg font-bold text-primary">
              CRO-RS 26388
            </p>
            <p className="text-xs text-muted-foreground">
              Direção técnica: Dr. Paulo Sérgio I. Moreira
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
