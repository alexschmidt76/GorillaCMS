import db from '../db/db.js';
import makeSlug from '../util/makeSlug.js';

type UUID = string & { readonly __brand: 'UUID' };

export const create = async (name: string, projectId: UUID) => {
    const slug = makeSlug(name);
    const [contentType] = await db`
        INSERT INTO content_types (name, project_id, slug)
        VALUES (${name}, ${projectId}, ${slug})
        RETURNING *
    `;
    return contentType;
}

export const getAllByProject = async (projectId: UUID) => {
    const contentTypes = await db`
        SELECT * FROM content_types WHERE project_id = ${projectId} ORDER BY created_at DESC
    `;
    return contentTypes;
}

export const getById = async (id: UUID) => {
    const [contentType] = await db`SELECT * FROM content_types WHERE id = ${id}`;
    return contentType ?? null;
}

export const update = async (id: UUID, name: string) => {
    const slug = makeSlug(name);
    const [contentType] = await db`
        UPDATE content_types SET name = ${name}, slug = ${slug}, updated_at = now()
        WHERE id = ${id}
        RETURNING *
    `;
    return contentType ?? null;
}

export const remove = async (id: UUID) => {
    await db`DELETE FROM content_types WHERE id = ${id}`;
}