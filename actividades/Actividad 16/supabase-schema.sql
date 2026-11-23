create table if not exists chat_history (
  id uuid primary key default gen_random_uuid(),
  user_name text,
  question text not null,
  answer text not null,
  source_meta text,
  provider text,
  created_at timestamp with time zone default now()
);

alter table chat_history enable row level security;

drop policy if exists "Allow public inserts into chat history" on chat_history;
create policy "Allow public inserts into chat history"
on chat_history
for insert
with check (true);

drop policy if exists "Allow public feedback chat lookup" on chat_history;
drop policy if exists "Allow public chat history lookup" on chat_history;
create policy "Allow public chat history lookup"
on chat_history
for select
using (true);
