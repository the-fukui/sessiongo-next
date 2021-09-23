alter table "public"."sessions_session_tags" drop constraint "sessions_session_tags_pkey";
alter table "public"."sessions_session_tags"
    add constraint "sessions_tags_pkey"
    primary key ("session_id", "tag_id");
