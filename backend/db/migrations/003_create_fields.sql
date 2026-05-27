CREATE TABLE fields (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    content_type_id UUID NOT NULL REFERENCES content_types(id) ON DELETE CASCADE,
    name            TEXT NOT NULL,
    slug            TEXT NOT NULL,
    type            TEXT NOT NULL,
    required        BOOLEAN NOT NULL DEFAULT false,
    unique_value    BOOLEAN NOT NULL DEFAULT false,
    config          JSONB,
    sort_order      INTEGER NOT NULL DEFAULT 0,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),

    CONSTRAINT valid_type CHECK (type IN (
        'text', 'richtext', 'number', 'boolean', 'date', 'media', 'slug'
    )),
    CONSTRAINT unique_fields UNIQUE (content_type_id, slug)
);

CREATE INDEX idx_fields_content_type_id ON fields(content_type_id);