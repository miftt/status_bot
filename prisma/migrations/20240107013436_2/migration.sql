/*
  Warnings:

  - You are about to drop the `ListBot` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ListBot" DROP CONSTRAINT "ListBot_userId_fkey";

-- DropTable
DROP TABLE "ListBot";

-- CreateTable
CREATE TABLE "listBot" (
    "id" SERIAL NOT NULL,
    "namaBot" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "world" TEXT NOT NULL,
    "uptime" TEXT NOT NULL,
    "lastUpdate" TEXT NOT NULL,
    "botInfo" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "listBot_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "listBot" ADD CONSTRAINT "listBot_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
