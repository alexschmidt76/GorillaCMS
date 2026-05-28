import db from '../db/db.js';
import type { UUID, JsonObject } from "../types/global.js";

type EntryStatus = 'draft' | 'published' | 'archived';

export const create = async (contentTypeId: UUID, status: EntryStatus, data: JsonObject) => {
    // get fields from content type
    const fields = await db`SELECT * FROM fields WHERE content_type_id = ${contentTypeId}`;

    // verify data object
    for (const field of fields) {
        // check required fields
        if (field.required && data[field.slug] === null) {
            throw new Error(`field '${field.slug}' is required`);
        }

        // check unique fields
        if (field.unique_value) {
            const [existing] = await db`
                SELECT id FROM entries
                WHERE content_type_id = ${contentTypeId}
                AND data @> ${JSON.stringify({ [field.slug]: data[field.slug] })}::jsonb
            `;

            if (existing) throw new Error(`field ${field.slug} must be unique`);
        }
    }

    const [entry] = await db`
        INSERT INTO entries (content_type_id, project_id, status, data, published_at)
        VALUES (
            ${contentTypeId},
            (SELECT project_id FROM content_types WHERE id = ${contentTypeId}),
            ${status},
            ${JSON.stringify(data)}::jsonb,
            ${status === 'published' ? new Date() : null}
        )
        RETURNING *
    `;

    return entry;
}