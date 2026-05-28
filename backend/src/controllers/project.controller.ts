import type { Request, Response } from "express";
import * as projectService from "../services/project.service.js";

export const createProject = async (req: Request, res: Response) => {
    const { name } = req.body;
    const project = await projectService.create(name);
    res.status(201).json({ project });
}

export const getAllProjects = async (_req: Request, res: Response) => {
    const projects = await projectService.getAll();
    res.status(200).json({ projects });
}

export const getProjectById = async (req: Request, res: Response) => {
    const { projectId } = req.params;
    const project = await projectService.getById(projectId as any);
    if (!project) {
        res.status(404).json({ error: 'Project not found' });
        return;
    }
    res.status(200).json({ project });
}

export const updateProject = async (req: Request, res: Response) => {
    const { projectId } = req.params;
    const { name } = req.body;
    const project = await projectService.update(projectId as any, name);
    if (!project) {
        res.status(404).json({ error: 'Project not found' });
        return;
    }
    res.status(200).json({ project });
}

export const deleteProject = async (req: Request, res: Response) => {
    const { projectId } = req.params;
    await projectService.remove(projectId as any);
    res.status(204).send();
}