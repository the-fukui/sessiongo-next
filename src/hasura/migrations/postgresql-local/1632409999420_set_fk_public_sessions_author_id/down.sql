alter table "public"."sessions" drop constraint "sessions_author_id_fkey",
  add constraint "sessions_author_fkey"
  foreign key ("author_id")
  references "public"."users"
  ("id") on update restrict on delete restrict;
