import { sql } from "drizzle-orm";
import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const files = sqliteTable("files", {
  link: text("link"),
  user: text("user", { length: 255 }),
  file: text("file"),
  uploadedAt: text("uploaded_at")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});
