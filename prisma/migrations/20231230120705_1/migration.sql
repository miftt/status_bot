/*
  Warnings:

  - You are about to drop the column `userId` on the `Token` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `Token` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Token" DROP CONSTRAINT "Token_userId_fkey";

-- DropIndex
DROP INDEX "Token_userId_key";

-- AlterTable
ALTER TABLE "Token" DROP COLUMN "userId",
ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "Token_id_seq";

-- CreateIndex
CREATE UNIQUE INDEX "Token_id_key" ON "Token"("id");

-- AddForeignKey
ALTER TABLE "Token" ADD CONSTRAINT "Token_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
