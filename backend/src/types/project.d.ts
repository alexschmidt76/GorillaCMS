type UUID = string & { readonly __brand: 'UUID' };

export default interface Project {
    id: UU,
    name: string,
    created_at: Date,
    updated_at: Date
};