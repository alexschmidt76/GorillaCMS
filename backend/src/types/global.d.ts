export type UUID = string & { readonly __brand: "UUID" };

export type JsonObject = Record<string, unknown>;
