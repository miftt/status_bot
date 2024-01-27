/*
  Warnings:

  - A unique constraint covering the columns `[uniqId]` on the table `listBot` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "expireDate" SET DEFAULT (NOW() + INTERVAL '1 month');

-- AlterTable
ALTER TABLE "listBot" ADD COLUMN     "uniqId" SERIAL NOT NULL,
ADD CONSTRAINT "listBot_pkey" PRIMARY KEY ("uniqId");

-- CreateIndex
CREATE UNIQUE INDEX "listBot_uniqId_key" ON "listBot"("uniqId");
