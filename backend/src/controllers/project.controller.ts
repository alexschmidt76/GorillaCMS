import type { Request, Response } from "express";
import * as projectService from "../services/project.service.js";

export const createProject = async (req: Request, res: Response) => {
    const { name } = req.body;
    const project = await projectService.create(name);
    res.status(200).json({ project });
}