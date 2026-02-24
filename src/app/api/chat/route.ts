import { NextRequest, NextResponse } from 'next/server'

const SYSTEM_PROMPT = `You are a helpful assistant for Ibai Mutiloa Aliaga's portfolio website. 
Ibai is a Backend & AI Engineer specialised in AI systems, RAG pipelines, and cloud infrastructure.
Answer questions about his background, skills, projects, and experience in a concise and friendly way.
Keep responses short (2-4 sentences). If you don't know something specific, suggest contacting him directly.`

export async function POST(req: NextRequest) {
  const { messages } = await req.json()

  if (!messages || !Array.isArray(messages)) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  const apiKey = process.env.OPENAI_API_KEY

  if (!apiKey) {
    return NextResponse.json({
      reply: "I'm not fully configured yet. Please reach out to Ibai directly at ibaimutiloaaliaga@gmail.com or via LinkedIn!",
    })
  }

  try {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...messages.map((m: { role: string; content: string }) => ({
            role: m.role,
            content: m.content,
          })),
        ],
        max_tokens: 200,
        temperature: 0.7,
      }),
    })

    if (!res.ok) {
      return NextResponse.json({ reply: 'Sorry, I could not get a response right now. Try contacting Ibai directly!' })
    }

    const data = await res.json()
    const reply = data.choices?.[0]?.message?.content ?? 'No response available.'

    return NextResponse.json({ reply })
  } catch {
    return NextResponse.json({ reply: 'Something went wrong. Please try contacting Ibai directly!' })
  }
}
