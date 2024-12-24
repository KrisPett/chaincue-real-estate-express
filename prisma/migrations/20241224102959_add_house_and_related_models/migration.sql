/*
  Warnings:

  - You are about to drop the column `email` on the `Broker` table. All the data in the column will be lost.
  - You are about to drop the column `phoneNumber` on the `Broker` table. All the data in the column will be lost.
  - Added the required column `contact` to the `Broker` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "HouseTypes" AS ENUM ('CONDOMINIUM', 'VILLA', 'TOWNHOUSE', 'VACATION_HOME', 'ESTATES_AND_FARMS', 'LAND', 'OTHER_HOUSES');

-- DropIndex
DROP INDEX "Broker_email_key";

-- AlterTable
ALTER TABLE "Broker" DROP COLUMN "email",
DROP COLUMN "phoneNumber",
ADD COLUMN     "contact" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "House" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "numberRooms" INTEGER NOT NULL,
    "beds" INTEGER NOT NULL,
    "price" TEXT NOT NULL,
    "src" TEXT NOT NULL,
    "sold" BOOLEAN NOT NULL,
    "houseTypes" "HouseTypes" NOT NULL,
    "brokerId" TEXT,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "House_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HouseImage" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "houseId" TEXT NOT NULL,

    CONSTRAINT "HouseImage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "House" ADD CONSTRAINT "House_brokerId_fkey" FOREIGN KEY ("brokerId") REFERENCES "Broker"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HouseImage" ADD CONSTRAINT "HouseImage_houseId_fkey" FOREIGN KEY ("houseId") REFERENCES "House"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
