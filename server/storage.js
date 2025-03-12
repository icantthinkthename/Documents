
// Storage interface with CRUD methods
export class MemStorage {
  constructor() {
    this.users = new Map();
    this.documents = new Map();
    this.userIdCounter = 1;
    this.documentIdCounter = 1;
    
    // Add a default user for demo purposes
    const defaultUser = {
      id: this.userIdCounter++,
      username: "sophia",
      password: "password123",
      displayName: "Sophia Carter",
      profileImage: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    };
    this.users.set(defaultUser.id, defaultUser);
  }

  async getUser(id) {
    return this.users.get(id);
  }

  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser) {
    const id = this.userIdCounter++;
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getDocument(id) {
    return this.documents.get(id);
  }

  async getDocumentsByUserId(userId) {
    return Array.from(this.documents.values())
      .filter(doc => doc.userId === userId)
      .sort((a, b) => {
        const dateA = new Date(a.createdAt).getTime();
        const dateB = new Date(b.createdAt).getTime();
        return dateB - dateA; // Sort by newest first
      });
  }

  async createDocument(insertDocument) {
    const id = this.documentIdCounter++;
    const now = new Date();
    const document = {
      ...insertDocument,
      id,
      createdAt: now
    };
    this.documents.set(id, document);
    return document;
  }
}

export const storage = new MemStorage();
