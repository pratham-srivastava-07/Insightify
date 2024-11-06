-- CreateTable
CREATE TABLE "Blog" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "is_premium" BOOLEAN NOT NULL,
    "is_published" BOOLEAN NOT NULL,

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BlogContent" (
    "id" SERIAL NOT NULL,
    "blogId" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "BlogContent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BlogContent_blogId_key" ON "BlogContent"("blogId");

-- AddForeignKey
ALTER TABLE "BlogContent" ADD CONSTRAINT "BlogContent_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "Blog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
