BEGIN TRANSACTION;
ALTER TABLE "public"."session_tags" DROP CONSTRAINT "session_tags_pkey";

ALTER TABLE "public"."session_tags"
    ADD CONSTRAINT "session_tags_pkey" PRIMARY KEY ("slug");
COMMIT TRANSACTION;
