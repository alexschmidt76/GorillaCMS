import { Router } from 'express';
import { createProject } from '../controllers/project.controller.js';

const project = Router();

project.post('/create', createProject);
/* project.get('/:projectId');
project.put('/update/:projectId');
project.delete('/delete/:projectId'); */

export default project;