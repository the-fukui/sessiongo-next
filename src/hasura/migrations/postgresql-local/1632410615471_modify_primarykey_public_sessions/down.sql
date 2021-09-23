alter table "public"."sessions" drop constraint "sessions_pkey";
alter table "public"."sessions"
    add constraint "sessions_pkey"
    primary key ("id");
