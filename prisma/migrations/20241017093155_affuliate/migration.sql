-- CreateTable
CREATE TABLE "Affiliate" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "Group" TEXT NOT NULL,
    "groupId" UUID,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Affiliate_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Affiliate_groupId_key" ON "Affiliate"("groupId");
