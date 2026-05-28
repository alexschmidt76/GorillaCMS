import { Router } from 'express';
import { createProject, getAllProjects, getProjectById, updateProject, deleteProject } from '../controllers/project.controller.js';

const project = Router();

project.post('/create', createProject);
project.get('/', getAllProjects);
project.get('/:projectId', getProjectById);
project.put('/update/:projectId', updateProject);
project.delete('/delete/:projectId', deleteProject);

export default project;