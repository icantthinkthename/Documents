import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
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

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertDocument = z.infer<typeof insertDocumentSchema>;
export type Document = typeof documents.$inferSelect;
export type DocumentFormData = z.infer<typeof documentFormSchema>;
