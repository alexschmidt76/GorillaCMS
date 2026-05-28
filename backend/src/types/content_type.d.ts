type UUID          = string;
type ContentTypeId = UUID & { readonly __brand: 'ContentTypeId' };
type ProjectId     = UUID & { readonly __brand: 'ProjectId' };

export default interface ContentType {
    id?: ContentTypeId,
    project_id?: ProjectId,
    name?: string,
    slug?: string,
    created_at?: Date,
    updated_at?: Date
};