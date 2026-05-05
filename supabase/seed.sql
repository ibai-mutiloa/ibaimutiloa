-- 1. Enable the pgvector extension
create extension if not exists vector;

-- 2. Create documents table
create table if not exists documents (
  id bigserial primary key,
  content text,
  embedding vector(1536)
);

-- 3. Insert CV chunks (embeddings are generated separately via scripts/seed-embeddings.ts)
insert into documents (content) values

('Ibai Mutiloa Aliaga is a software developer specialized in backend development, AI systems, and cloud infrastructure. He has hands-on experience modernizing legacy platforms and building production-ready applications in enterprise environments. Currently, he works on applied AI systems using Retrieval-Augmented Generation (RAG), modern authentication systems such as MFA and OIDC, and cloud-based deployments. His work is used daily by over 200 users in a university production environment.'),

('Ibai Mutiloa Aliaga has strong backend development experience using Python, FastAPI, PHP (Moodle), Node.js, and Java. He has built and maintained REST APIs and worked on real-world backend systems focused on performance, scalability, and maintainability.'),

('Ibai Mutiloa Aliaga has practical experience working with applied AI systems, especially Retrieval-Augmented Generation (RAG). He has implemented semantic search systems using vector databases such as pgvector and integrated large language models into real-world applications.'),

('Ibai Mutiloa Aliaga has experience working with cloud and infrastructure technologies including Microsoft Azure, Docker, and Jenkins. He has deployed and managed applications in containerized environments and worked with Linux systems such as Debian.'),

('Ibai Mutiloa Aliaga has implemented observability solutions using tools such as Grafana and Matomo, focusing on monitoring performance, tracking usage, and improving system reliability.'),

('Ibai Mutiloa Aliaga has experience working with relational databases such as PostgreSQL and MySQL. He has used PostgreSQL with pgvector to implement vector-based search systems for AI applications.'),

('Ibai Mutiloa Aliaga is currently working as a Software Developer at Mondragon Unibertsitatea. He developed an AI system based on Retrieval-Augmented Generation (RAG) integrating university regulations into a legacy intranet and implemented semantic search and MFA.'),

('Ibai Mutiloa Aliaga worked as a Software Development Intern where he developed internal web applications and worked on Moodle backend systems in PHP.'),

('Ibai Mutiloa Aliaga has worked on projects including a corporate AI system based on RAG, LEZGuard (a machine learning emission prediction tool), and SolRaise (a Web3 crowdfunding platform).'),

('Ibai Mutiloa Aliaga is pursuing a Bachelor''s Degree in Computer Engineering and has completed Cisco CCNAv7 in Enterprise Networking, Security, and Automation.'),

('Ibai Mutiloa Aliaga speaks Spanish and Basque natively and has a B2 level in English (Cambridge First).');

-- 4. Create similarity-search function used by the chat API
create or replace function match_documents (
  query_embedding vector(1536),
  match_threshold float,
  match_count int
)
returns table (
  id bigint,
  content text,
  similarity float
)
language sql stable
as $$
  select
    documents.id,
    documents.content,
    1 - (documents.embedding <=> query_embedding) as similarity
  from documents
  where 1 - (documents.embedding <=> query_embedding) > match_threshold
  order by similarity desc
  limit match_count;
$$;
