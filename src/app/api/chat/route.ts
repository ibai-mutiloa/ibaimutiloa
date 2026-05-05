import { NextRequest, NextResponse } from 'next/server'
import { getSupabase } from '@/lib/supabase'

const BASE_SYSTEM_PROMPT = `You are a helpful assistant for Ibai Mutiloa Aliaga's portfolio website. 
Ibai is a Backend & AI Engineer specialised in AI systems, RAG pipelines, and cloud infrastructure.
Answer questions about his background, skills, projects, and experience in a concise and friendly way.
Keep responses short (2-4 sentences). If you don't know something specific, suggest contacting him directly.`

async function getEmbedding(text: string, apiKey: string): Promise<number[] | null> {
  try {
    const res = await fetch('https://api.openai.com/v1/embeddings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'text-embedding-3-small',
        input: text,
      }),
    })
    if (!res.ok) {
      console.error(`Embedding API error: ${res.status} ${res.statusText}`)
      return null
    }
    const data = await res.json()
    return data.data?.[0]?.embedding ?? null
  } catch (err) {
    console.error('Embedding request failed:', err)
    return null
  }
}

async function retrieveContext(query: string, apiKey: string): Promise<string> {
  const supabase = getSupabase()
  if (!supabase) return ''

  const embedding = await getEmbedding(query, apiKey)
  if (!embedding) return ''

  const { data, error } = await supabase.rpc('match_documents', {
    query_embedding: embedding,
    match_threshold: 0.5,
    match_count: 3,
  })

  if (error || !data || data.length === 0) {
    if (error) console.error('Supabase match_documents error:', error.message)
    return ''
  }

  return (data as { content: string }[]).map((d) => d.content).join('\n\n')
}

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

  const lastUserMessage = [...messages].reverse().find((m: { role: string; content: string }) => m.role === 'user')
  const context = lastUserMessage
    ? await retrieveContext(lastUserMessage.content, apiKey)
    : ''

  const systemPrompt = context
    ? `${BASE_SYSTEM_PROMPT}\n\nRelevant context about Ibai:\n${context}`
    : BASE_SYSTEM_PROMPT

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
          { role: 'system', content: systemPrompt },
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
