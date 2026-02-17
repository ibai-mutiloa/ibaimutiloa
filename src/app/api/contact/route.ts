import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  await resend.emails.send({
    from: `${name} <${email}>`,
    to: 'ibaimutiloaaliaga@gmail.com',
    subject: `Portfolio contact from ${name}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  })

  return NextResponse.json({ ok: true })
}