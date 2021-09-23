alter table "public"."sessions" drop constraint "sessions_author_fkey",
  add constraint "sessions_author_id_fkey"
  foreign key ("author_id")
  references "public"."users"
  ("id") on update no action on delete no action;
