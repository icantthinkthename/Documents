import { users, type User, type InsertUser, documents, type Document, type InsertDocument } from "@shared/schema";

// Storage interface with CRUD methods
export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getDocument(id: number): Promise<Document | undefined>;
  getDocumentsByUserId(userId: number): Promise<Document[]>;
  createDocument(document: InsertDocument): Promise<Document>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private documents: Map<number, Document>;
  private userIdCounter: number;
  private documentIdCounter: number;

  constructor() {
    this.users = new Map();
    this.documents = new Map();
    this.userIdCounter = 1;
    this.documentIdCounter = 1;
    
    // Add a default user for demo purposes
    const defaultUser: User = {
      id: this.userIdCounter++,
      username: "sophia",
      password: "password123",
      displayName: "Sophia Carter",
      profileImage: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    };
    this.users.set(defaultUser.id, defaultUser);
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userIdCounter++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getDocument(id: number): Promise<Document | undefined> {
    return this.documents.get(id);
  }

  async getDocumentsByUserId(userId: number): Promise<Document[]> {
    return Array.from(this.documents.values())
      .filter(doc => doc.userId === userId)
      .sort((a, b) => {
        const dateA = new Date(a.createdAt).getTime();
        const dateB = new Date(b.createdAt).getTime();
        return dateB - dateA; // Sort by newest first
      });
  }

  async createDocument(insertDocument: InsertDocument): Promise<Document> {
    const id = this.documentIdCounter++;
    const now = new Date();
    const document: Document = {
      ...insertDocument,
      id,
      createdAt: now
    };
    this.documents.set(id, document);
    return document;
  }
}

export const storage = new MemStorage();
