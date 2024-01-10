-- CreateTable
CREATE TABLE "ListBot" (
    "id" SERIAL NOT NULL,
    "namaBot" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "world" TEXT NOT NULL,
    "uptime" TEXT NOT NULL,
    "lastUpdate" TEXT NOT NULL,
    "botInfo" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "ListBot_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ListBot" ADD CONSTRAINT "ListBot_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
