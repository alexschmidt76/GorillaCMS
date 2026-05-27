import db from '../db/db.js';

export const create = async (name: string) => {
    const project = await db`INSERT INTO projects (name) VALUES (${name})`;
    return project;
}