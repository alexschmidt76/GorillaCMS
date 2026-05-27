const makeSlug = (s: string): string => {
    return s.toLowerCase()
        .trim()
        .replace(/\s+/g, '+')
        .replace(/[^a-z0-9+]/g, '')
        .replace(/\++/g, '+')
        .replace(/^\+|\+$/g, '')
}

export default makeSlug;