/*
  Warnings:

  - The primary key for the `sessions_session_tags` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `email` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[session_id,tag_id]` on the table `sessions_session_tags` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[auth_id]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_name]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `auth_id` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_name` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `users_email_key` ON `users`;

-- AlterTable
ALTER TABLE `sessions_session_tags` DROP PRIMARY KEY,
    ADD PRIMARY KEY (`session_id`, `tag_id`);

-- AlterTable
ALTER TABLE `users` DROP COLUMN `email`,
    ADD COLUMN `auth_id` VARCHAR(255) NOT NULL,
    ADD COLUMN `user_name` VARCHAR(255) NOT NULL,
    MODIFY `name` VARCHAR(255);

-- CreateIndex
CREATE UNIQUE INDEX `sessions_session_tags_session_id_tag_id_key` ON `sessions_session_tags`(`session_id`, `tag_id`);

-- CreateIndex
CREATE UNIQUE INDEX `users_auth_id_key` ON `users`(`auth_id`);

-- CreateIndex
CREATE UNIQUE INDEX `users_user_name_key` ON `users`(`user_name`);
