import type { Request, Response } from "express"
import * as contentTypeService from '../services/contentType.service.js';

export const createContentType = async (req: Request, res: Response) => {
    const { name, projectId } = req.body;
    const contentType = await contentTypeService.create(name, projectId);
    res.status(200).json({ contentType });
}