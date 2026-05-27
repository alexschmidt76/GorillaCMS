import type { Request, Response } from "express";
import * as projectService from "../services/project.service.js";
import type Project from "../types/project.js";

export const createProject = async (req: Request, res: Response) => {
    const projectDetails: Project = req.body;
    console.log(projectDetails)
    const project = await projectService.createProject(projectDetails);
    res.status(200).json({ project });
}