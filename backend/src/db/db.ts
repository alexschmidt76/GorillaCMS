import postgres from "postgres";

const url: string = process.env.DB_URL || '';

const db = postgres(url);

export default db;