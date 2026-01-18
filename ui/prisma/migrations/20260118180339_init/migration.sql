-- CreateTable
CREATE TABLE "EarlyUsers" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "EarlyUsers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "EarlyUsers_email_key" ON "EarlyUsers"("email");
