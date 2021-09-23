BEGIN TRANSACTION;
ALTER TABLE "public"."sessions" DROP CONSTRAINT "sessions_pkey";

ALTER TABLE "public"."sessions"
    ADD CONSTRAINT "sessions_pkey" PRIMARY KEY ("slug");
COMMIT TRANSACTION;
