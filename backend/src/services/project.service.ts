import db from '../db/db.js';

type UUID = string & { readonly __brand: 'UUID' };

export const create = async (name: string) => {
    const [project] = await db`INSERT INTO projects (name) VALUES (${name}) RETURNING *`;
    return project;
}

export const getAll = async () => {
    const projects = await db`SELECT * FROM projects ORDER BY created_at DESC`;
    return projects;
}

export const getById = async (id: UUID) => {
    const [project] = await db`SELECT * FROM projects WHERE id = ${id}`;
    return project ?? null;
}

export const update = async (id: UUID, name: string) => {
    const [project] = await db`
        UPDATE projects SET name = ${name}, updated_ad = now()
        WHERE id = ${id}
        RETURNING *
    `;
    return project ?? null;
}

export const remove = async (id: UUID) => {
    await db`DELETE FROM projects WHERE id = ${id}`;
}