import type { Request, Response } from "express"
import * as contentTypeService from '../services/contentType.service.js';

export const createContentType = async (req: Request, res: Response) => {
    const { name, projectId } = req.body;
    const contentType = await contentTypeService.create(name, projectId);
    res.status(201).json({ contentType });
}

export const getContentTypesByProject = async (req: Request, res: Response) => {
    const { projectId } = req.params;
    const contentTypes = await contentTypeService.getAllByProject(projectId as any);
    res.status(200).json({ contentTypes });
}

export const getContentTypeById = async (req: Request, res: Response) => {
    const { contentTypeId } = req.params;
    const contentType = await contentTypeService.getById(contentTypeId as any);
    if (!contentType) {
        res.status(404).json({ error: 'Content type not found' });
        return;
    }
    res.status(200).json({ contentType });
}

export const updateContentType = async (req: Request, res: Response) => {
    const { contentTypeId } = req.params;
    const { name } = req.body;
    const contentType = await contentTypeService.update(contentTypeId as any, name);
    if (!contentType) {
        res.status(404).json({ error: 'Content type not found' });
        return;
    }
    res.status(200).json({ contentType });
}

export const deleteContentType = async (req: Request, res: Response) => {
    const { contentTypeId } = req.params;
    await contentTypeService.remove(contentTypeId as any);
    res.status(204).send();
}