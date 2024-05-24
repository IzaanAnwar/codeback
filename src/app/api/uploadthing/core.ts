import { db } from "@/drizzle";
import { files } from "@/drizzle/schema";
import { auth } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

export const ourFileRouter = {
  fileUploader: f({
    image: { maxFileSize: "1024MB" },
    "application/zip": { maxFileSize: "1024MB" },
    pdf: { maxFileSize: "1024MB" },
    text: { maxFileSize: "1024MB" },
  })
    // Set permissions and file types for this FileRoute
    .middleware(async () => {
      const user = await auth();

      if (!user.userId) throw new UploadThingError("Unauthorized");

      return { userId: user.userId };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", metadata.userId);
      try {
        await db.insert(files).values({
          user: metadata.userId,
          link: file.url,
          file: file.name,
        });
      } catch (error) {
        console.error(error);
      }
      console.log("file url", file.url);

      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
