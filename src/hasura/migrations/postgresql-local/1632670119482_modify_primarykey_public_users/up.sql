BEGIN TRANSACTION;
ALTER TABLE "public"."users" DROP CONSTRAINT "users_pkey";

ALTER TABLE "public"."users"
    ADD CONSTRAINT "users_pkey" PRIMARY KEY ("auth_id");
COMMIT TRANSACTION;
