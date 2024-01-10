/*
  Warnings:

  - The primary key for the `listBot` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `slot` on the `listBot` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id,userId]` on the table `listBot` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "listBot" DROP CONSTRAINT "listBot_pkey",
DROP COLUMN "slot",
ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "listBot_id_seq";

-- CreateIndex
CREATE UNIQUE INDEX "listBot_id_userId_key" ON "listBot"("id", "userId");
