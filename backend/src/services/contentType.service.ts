import db from '../db/db.js';
import makeSlug from '../util/makeSlug.js';

type UUID = string & { readonly __brand: 'UUID' };

export const create = async (name: string, projectId: UUID) => {
    const slug = makeSlug(name);
    const contentType = await db`
        INSERT INTO content_types (name, project_id, slug) 
        VALUES (${name}, ${projectId}, ${slug})
    `;
    return contentType;
}