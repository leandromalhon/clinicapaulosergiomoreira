import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const PERIOD_LABELS: Record<string, string> = {
  morning: 'Manhã',
  afternoon: 'Tarde',
  any: 'Qualquer horário',
}

export async function POST(request: Request) {
  try {
    const { name, phone, contactPeriod, reason } = await request.json()

    if (!name || !contactPeriod) {
      return NextResponse.json(
        { error: 'Nome e preferência de horário são obrigatórios.' },
        { status: 400 },
      )
    }

    const apiKey = process.env.RESEND_API_KEY
    const toEmail = process.env.CONTACT_EMAIL_TO

    if (!apiKey || !toEmail) {
      console.error(
        '[contact] RESEND_API_KEY ou CONTACT_EMAIL_TO não configurados.',
      )
      return NextResponse.json(
        {
          error:
            'Serviço de e-mail ainda não configurado. Tente novamente mais tarde ou fale conosco pelo WhatsApp.',
        },
        { status: 500 },
      )
    }

    const resend = new Resend(apiKey)
    const periodLabel = PERIOD_LABELS[contactPeriod] ?? contactPeriod

    await resend.emails.send({
      // Antes de ir para produção: troque pelo remetente do seu domínio
      // verificado no Resend (ex: 'Clínica Dr. Paulo Sérgio <contato@seudominio.com.br>')
      from: 'Site Clínica <onboarding@resend.dev>',
      to: toEmail,
      subject: `Nova solicitação de contato — ${name}`,
      text: [
        `Nome: ${name}`,
        `Telefone: ${phone || 'não informado'}`,
        `Preferência de horário: ${periodLabel}`,
        `Motivo da consulta: ${reason || 'não informado'}`,
      ].join('\n'),
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('[contact] erro ao enviar email:', error)
    return NextResponse.json(
      { error: 'Não foi possível enviar sua solicitação. Tente novamente.' },
      { status: 500 },
    )
  }
}
