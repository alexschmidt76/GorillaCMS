import type { Request, Response } from "express";
import * as entryServices from '../services/entry.service.js';

export const createEntry = async (req: Request, res: Response) => {
    const { contentTypeId, status, data } = req.body;
    const entry = await entryServices.create(contentTypeId, status, data);
    return res.status(201).json({ entry });
}