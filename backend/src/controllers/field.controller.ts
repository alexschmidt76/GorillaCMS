import type { Request, Response } from "express";
import * as fieldService from "../services/field.service.js";

export const createField = async (req: Request, res: Response) => {
    const { name, contentTypeId, type, required, uniqueValue, config, sortOrder } = req.body;
    const field = await fieldService.create(name, contentTypeId, type, required, uniqueValue, config, sortOrder);
    res.status(201).json({ field });
}

export const getFieldsByContentType = async (req: Request, res: Response) => {
    const { contentTypeId } = req.params;
    const fields = await fieldService.getAllByContentType(contentTypeId as any);
    res.status(200).json({ fields });
}

export const getFieldById = async (req: Request, res: Response) => {
    const { fieldId } = req.params;
    const field = await fieldService.getById(fieldId as any);
    if (!field) {
        res.status(404).json({ error: 'Field not found' });
        return;
    }
    res.status(200).json({ field });
}

export const updateField = async (req: Request, res: Response) => {
    const { fieldId } = req.params;
    const field = await fieldService.update(fieldId as any, req.body);
    if (!field) {
        res.status(404).json({ error: 'Field not found' });
        return;
    }
    res.status(200).json({ field });
}

export const deleteField = async (req: Request, res: Response) => {
    const { fieldId } = req.params;
    await fieldService.remove(fieldId as any);
    res.status(204).send();
}
