-- AlterTable
ALTER TABLE "User" ADD COLUMN     "status_bot" TEXT NOT NULL DEFAULT 'Online',
ALTER COLUMN "expireDate" SET DEFAULT (NOW() + INTERVAL '1 month');
