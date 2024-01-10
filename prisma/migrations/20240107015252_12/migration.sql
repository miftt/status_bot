/*
  Warnings:

  - Added the required column `slot` to the `listBot` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "listBot" ADD COLUMN     "slot" INTEGER NOT NULL;
