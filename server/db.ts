import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "@shared/schema";

const { Pool } = pg;

export type Database = ReturnType<typeof drizzle<typeof schema>>;

// If no DATABASE_URL is provided we skip creating a pool so the app can fall
// back to an in-memory storage implementation.
export const pool = process.env.DATABASE_URL
  ? new Pool({ connectionString: process.env.DATABASE_URL })
  : null;

export const db: Database | null = pool ? drizzle(pool, { schema }) : null;
