/**
 * scripts/seed-embeddings.ts
 *
 * Reads all documents from Supabase that have no embedding yet,
 * generates embeddings via OpenAI text-embedding-3-small (1536 dims),
 * and writes them back with UPDATE.
 *
 * Usage:
 *   OPENAI_API_KEY=<key> SUPABASE_URL=<url> SUPABASE_SERVICE_ROLE_KEY=<key> \
 *     npx ts-node --project tsconfig.scripts.json scripts/seed-embeddings.ts
 */

import { createClient } from '@supabase/supabase-js'
import OpenAI from 'openai'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY
const openaiKey = process.env.OPENAI_API_KEY

if (!supabaseUrl || !supabaseKey || !openaiKey) {
  console.error('Missing required environment variables: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, OPENAI_API_KEY')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)
const openai = new OpenAI({ apiKey: openaiKey })

async function main() {
  const { data: documents, error } = await supabase
    .from('documents')
    .select('id, content')
    .is('embedding', null)

  if (error) {
    console.error('Failed to fetch documents:', error.message)
    process.exit(1)
  }

  if (!documents || documents.length === 0) {
    console.log('No documents without embeddings found.')
    return
  }

  console.log(`Generating embeddings for ${documents.length} document(s)…`)

  const BATCH_SIZE = 5

  for (let i = 0; i < documents.length; i += BATCH_SIZE) {
    const batch = documents.slice(i, i + BATCH_SIZE)

    await Promise.allSettled(
      batch.map(async (doc) => {
        const response = await openai.embeddings.create({
          model: 'text-embedding-3-small',
          input: doc.content,
        })

        const embedding = response.data[0].embedding

        const { error: updateError } = await supabase
          .from('documents')
          .update({ embedding })
          .eq('id', doc.id)

        if (updateError) {
          console.error(`Failed to update document ${doc.id}:`, updateError.message)
        } else {
          console.log(`✓ Embedded document ${doc.id}`)
        }
      })
    )
  }

  console.log('Done.')
}

main()
