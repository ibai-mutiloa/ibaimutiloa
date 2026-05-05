import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  
  const { name, email, message } = await req.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  // simple email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
  }

  // Use a verified sender address for the email address, but allow the
  // user's `name` from the form to be used as the display name. The
  // sending address (domain) must be verified in Resend; otherwise the
  // request will be rejected.
  const senderEmail = process.env.SENDER_EMAIL || 'portfolio@ibaimutiloa.es'
  // sanitize user-provided name to avoid newlines or angle brackets
  const safeName = String(name).replace(/[\n\r<>]/g, ' ').trim() || 'Contact'
  const from = `${safeName} <${senderEmail}>`

  try {
    await resend.emails.send({
      from,
      to: 'ibaimutiloaaliaga@gmail.com',
      subject: `Portfolio contact from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      headers: {
        'Reply-To': `${name} <${email}>`,
      },
    })
  } catch (err: any) {
    // Log the error server-side and return the provider error for debugging.
    console.error('Resend error:', err)
    const message = err?.message || 'Failed to send message'
    return NextResponse.json({ error: 'Failed to send message', detail: message }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}