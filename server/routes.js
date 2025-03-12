
import { createServer } from "http";
import { storage } from "./storage.js";
import { z } from "zod";

export async function registerRoutes(app) {
  // Documents endpoint
  app.post("/api/documents", async (req, res) => {
    try {
      const documentData = req.body;
      const document = await storage.createDocument(documentData);
      res.status(201).json(document);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid document data", errors: error.errors });
      } else {
        console.error("Error creating document:", error);
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  app.get("/api/documents", async (req, res) => {
    try {
      const userId = req.query.userId ? parseInt(req.query.userId) : undefined;
      
      if (!userId) {
        return res.status(400).json({ message: "User ID is required" });
      }
      
      const documents = await storage.getDocumentsByUserId(userId);
      res.json(documents);
    } catch (error) {
      console.error("Error fetching documents:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get("/api/documents/:id", async (req, res) => {
    try {
      const documentId = parseInt(req.params.id);
      const document = await storage.getDocument(documentId);
      
      if (!document) {
        return res.status(404).json({ message: "Document not found" });
      }
      
      res.json(document);
    } catch (error) {
      console.error("Error fetching document:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
