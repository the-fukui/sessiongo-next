alter table "public"."sessions_session_tags" drop constraint "sessions_session_tags_session_id_fkey",
  add constraint "sessions_tags_session_id_fkey"
  foreign key ("session_id")
  references "public"."sessions"
  ("id") on update restrict on delete restrict;
