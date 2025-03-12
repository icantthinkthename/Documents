
import { pgTable, text, serial, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  displayName: text("display_name"),
  profileImage: text("profile_image"),
});

export const documents = pgTable("documents", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  documentType: text("document_type").notNull(),
  reasonDetails: text("reason_details").notNull(),
  fileName: text("file_name").notNull(),
  fileUrl: text("file_url").notNull(),
  fileSize: integer("file_size").notNull(),
  fileType: text("file_type").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  displayName: true,
  profileImage: true,
});

export const insertDocumentSchema = createInsertSchema(documents).pick({
  userId: true,
  documentType: true,
  reasonDetails: true,
  fileName: true,
  fileUrl: true,
  fileSize: true,
  fileType: true,
});

export const documentFormSchema = z.object({
  documentType: z.string().min(1, "Document type is required"),
  reasonDetails: z.string().min(1, "Reason details are required"),
  file: z.instanceof(File, { message: "A file is required" })
});
