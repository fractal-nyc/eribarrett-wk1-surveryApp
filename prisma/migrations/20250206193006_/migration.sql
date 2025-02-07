/*
  Warnings:

  - You are about to drop the column `answer` on the `Survey` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Survey" DROP COLUMN "answer";

-- CreateTable
CREATE TABLE "Answer" (
    "id" SERIAL NOT NULL,
    "surveyId" INTEGER NOT NULL,
    "answer" TEXT NOT NULL,

    CONSTRAINT "Answer_pkey" PRIMARY KEY ("id")
);
