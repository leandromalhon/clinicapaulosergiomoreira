"use client";

import { useState } from "react";
import { Phone, Star, CheckCircle2, AlertCircle } from "lucide-react";
import { clinic } from "@/lib/site";
import { WhatsappCta } from "@/components/whatsapp-cta";
import { InstagramIcon, FacebookIcon } from "@/components/icons";

const PERIOD_OPTIONS = [
  { value: "morning", label: "Manhã" },
  { value: "afternoon", label: "Tarde" },
  { value: "any", label: "Flexível" },
] as const;

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [contactPeriod, setContactPeriod] = useState("");
  const [reason, setReason] = useState("");
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, contactPeriod, reason }),
      });

      if (!response.ok) throw new Error("Falha no envio");

      setStatus("success");
      setName("");
      setPhone("");
      setContactPeriod("");
      setReason("");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="contato" className="scroll-mt-20 bg-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-10 pt-16 md:gap-14 md:pb-12 md:pt-20 lg:grid-cols-2 lg:px-6">
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

          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-[var(--surface)] p-5 text-center transition-shadow hover:shadow-md">
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                Siga-nos
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={clinic.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram da clínica"
                  className="flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
                >
                  <InstagramIcon className="size-5" />
                </a>
                <a
                  href={clinic.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook da clínica"
                  className="flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
                >
                  <FacebookIcon className="size-5" />
                </a>
              </div>
              <span className="text-xs text-muted-foreground">
                {clinic.instagram.handle}
              </span>
            </div>

            <a
              href={clinic.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-[var(--surface)] p-5 text-center transition-shadow hover:border-primary hover:shadow-md"
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                Avaliações
              </span>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">
                <span className="font-serif text-base font-bold text-foreground">
                  5,0
                </span>{" "}
                · 16 avaliações no Google
              </span>
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 rounded-2xl border border-border bg-[var(--surface)] p-6 md:p-8"
        >
          <p className="text-sm text-muted-foreground">
            Prefere que a gente entre em contato? Envie sua solicitação abaixo.
          </p>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="name"
              className="text-sm font-medium text-foreground"
            >
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
            <label
              htmlFor="phone"
              className="text-sm font-medium text-foreground"
            >
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

          <fieldset className="flex flex-col gap-2">
            <legend className="text-sm font-medium text-foreground">
              Preferência de horário para retorno{" "}
              <span className="text-primary">*</span>
            </legend>
            <div className="grid grid-cols-3 gap-2">
              {PERIOD_OPTIONS.map((opt) => (
                <label key={opt.value} className="cursor-pointer">
                  <input
                    type="radio"
                    name="contactPeriod"
                    value={opt.value}
                    checked={contactPeriod === opt.value}
                    onChange={() => setContactPeriod(opt.value)}
                    required
                    className="peer sr-only"
                  />
                  <span className="flex w-full items-center justify-center rounded-full border border-input px-2 py-2 text-center text-xs font-medium leading-tight text-foreground transition-colors peer-checked:border-primary peer-checked:bg-primary peer-checked:text-primary-foreground peer-focus-visible:ring-2 peer-focus-visible:ring-primary/20 sm:text-sm">
                    {opt.label}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="reason"
              className="text-sm font-medium text-foreground"
            >
              Motivo da consulta
            </label>
            <textarea
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              rows={4}
              className="resize-none rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20"
              placeholder="Ex: Gostaria de fazer uma avaliação e limpeza, sinto um leve incômodo no dente..."
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="h-11 w-full rounded-full bg-primary text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "submitting" ? "Enviando..." : "Enviar Solicitação"}
          </button>

          {status === "success" && (
            <p className="flex items-center gap-2 text-sm font-medium text-emerald-700">
              <CheckCircle2 className="size-4 shrink-0" />
              Solicitação enviada! Nossa equipe entrará em contato em breve.
            </p>
          )}
          {status === "error" && (
            <p className="flex items-center gap-2 text-sm font-medium text-red-700">
              <AlertCircle className="size-4 shrink-0" />
              Não foi possível enviar. Tente novamente ou fale conosco pelo
              WhatsApp.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
