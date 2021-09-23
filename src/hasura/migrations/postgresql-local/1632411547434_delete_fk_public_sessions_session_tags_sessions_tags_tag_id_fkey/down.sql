alter table "public"."sessions_session_tags"
  add constraint "sessions_tags_tag_id_fkey"
  foreign key ("tag_id")
  references "public"."session_tags"
  ("id") on update restrict on delete restrict;
