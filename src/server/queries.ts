"use server";

import { db } from "@/drizzle";
import { files } from "@/drizzle/schema";
import { auth } from "@clerk/nextjs/server";
import { desc, eq } from "drizzle-orm";

export async function getAllFiles() {
  const user = auth();

  if (!user?.userId) return;
  const allfiles = await db
    .select()
    .from(files)
    .where(eq(files.user, user.userId))
    .orderBy(desc(files.uploadedAt));

  return allfiles;
}
