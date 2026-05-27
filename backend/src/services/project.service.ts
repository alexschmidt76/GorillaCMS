import db from '../db/db.js';

export const createProject = async (data: {
    name: string
}) => {
    const project = await db`
    INSERT INTO 
        projects (name)
    VALUES
        (${data.name})
    `
    return project;
}