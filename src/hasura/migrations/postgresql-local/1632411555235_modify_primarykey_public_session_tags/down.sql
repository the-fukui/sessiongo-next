alter table "public"."session_tags" drop constraint "session_tags_pkey";
alter table "public"."session_tags"
    add constraint "session_tags_pkey"
    primary key ("id");
