import { db, type Database } from "./db";
import { leads, type InsertLead, type Lead } from "@shared/schema";

export interface IStorage {
  createLead(lead: InsertLead): Promise<Lead>;
}

export class DatabaseStorage implements IStorage {
  constructor(private database: Database) {}

  async createLead(lead: InsertLead): Promise<Lead> {
    const [newLead] = await this.database.insert(leads).values(lead).returning();
    return newLead;
  }
}

class InMemoryStorage implements IStorage {
  private leads: Lead[] = [];
  private nextId = 1;

  async createLead(lead: InsertLead): Promise<Lead> {
    const newLead: Lead = {
      id: this.nextId++,
      createdAt: new Date(),
      ...lead,
    };

    this.leads.push(newLead);
    return newLead;
  }
}

export const storage: IStorage = db
  ? new DatabaseStorage(db)
  : (() => {
      console.warn(
        "DATABASE_URL not set; using in-memory storage for leads (data will not persist).",
      );
      return new InMemoryStorage();
    })();
