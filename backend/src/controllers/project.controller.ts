import { request, Response } from "express";
import * as projectService from "../services/project.service.js";

export const createProject = async (req: Request, res: Response) => {
    const projectDetails = req.body;
    const project = await projectService.createProject(projectDetails);
    res.status(200).json({ project });
}