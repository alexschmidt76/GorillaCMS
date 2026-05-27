type UUID = string;
type FieldId = UUID & { readonly __brand: 'FieldId' };
type ContentTypeId = UUID & { readonly __brand: 'ContentTypeId' };

enum FieldType {
    'text', 'rechtext', 'number', 'boolean', 'date', 'media', 'slug'
};

export default interface Field {
    id: FieldId,
    content_type_id: ContentTypeId,
    name: string,
    slug: string,
    type: FieldType,
    required: boolean,
    unique_value: boolean,
    config: JSON,
    sort_order: number,
    created_at: Date,
    updated_at: Date
}