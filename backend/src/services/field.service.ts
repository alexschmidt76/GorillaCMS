import db from "../db/db.js";
import makeSlug from "../util/makeSlug.js";

type UUID = string & { readonly __brand: 'UUID' };

type JsonObject = Record<string, unknown>;

type FieldType = 'text' | 'rechtext' | 'number' | 'boolean' | 'date' | 'media' | 'slug';

interface FieldUpdates {
    name?: string;
    type?: string;
    required?: boolean;
    unique_value?: boolean;
    config?: JsonObject;
    sort_order?: number;
}

export const create = async (
    name: string,
    contentTypeId: UUID,
    type: FieldType,
    required: boolean = false,
    uniqueValue: boolean = false,
    config: JsonObject | null = null,
    sortOrder: number = 0
) => {
    const slug = makeSlug(name);
    const [field] = await db`
        INSERT INTO fields (name, slug, content_type_id, type, required, unique_value, config, sort_order)
        VALUES (${name}, ${slug}, ${contentTypeId}, ${type}, ${required}, ${uniqueValue}, ${db.json(config as any)}, ${sortOrder})
        RETURNING *
    `;
    return field;
}

export const getAllByContentType = async (contentTypeId: UUID) => {
    const fields = await db`
        SELECT * FROM fields WHERE content_type_id = ${contentTypeId} ORDER BY sort_order
    `;
    return fields;
}

export const getById = async (id: UUID) => {
    const [field] = await db`SELECT * FROM fields WHERE id = ${id}`;
    return field ?? null;
}

export const update = async (id: UUID, updates: FieldUpdates) => {
    const current = await getById(id);
    if (!current) return null;

    const name = updates.name ?? current.name;
    const slug = updates.name ? makeSlug(updates.name) : current.slug;
    const type = updates.type ?? current.type;
    const required = updates.required ?? current.required;
    const uniqueValue = updates.unique_value ?? current.unique_value;
    const config = updates.config ?? current.config;
    const sortOrder = updates.sort_order ?? current.sort_order;

    const [field] = await db`
        UPDATE fields
        SET name = ${name}, slug = ${slug}, type = ${type}, required = ${required},
            unique_value = ${uniqueValue}, config = ${db.json(config as any)}, sort_order = ${sortOrder}
        WHERE id = ${id}
        RETURNING *
    `;
    return field ?? null;
}

export const remove = async (id: UUID) => {
    await db`DELETE FROM fields WHERE id = ${id}`;
}