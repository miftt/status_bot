/*
  Warnings:

  - Added the required column `expireDate` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "expireDate" TIMESTAMP(3) NOT NULL;
