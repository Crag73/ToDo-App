/*
  Warnings:

  - You are about to drop the `ToDo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "ToDo";

-- DropTable
DROP TABLE "User";

-- DropEnum
DROP TYPE "Role";

-- CreateTable
CREATE TABLE "Todo" (
    "id" SERIAL NOT NULL,
    "desc" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);
