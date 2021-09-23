BEGIN TRANSACTION;
ALTER TABLE "public"."sessions_session_tags" DROP CONSTRAINT "sessions_tags_pkey";

ALTER TABLE "public"."sessions_session_tags"
    ADD CONSTRAINT "sessions_tags_pkey" PRIMARY KEY ("session_id");
COMMIT TRANSACTION;
