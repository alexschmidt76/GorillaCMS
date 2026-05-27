import { Router } from 'express';

const project = Router();

project.post('/create');
project.get('/:projectId');
project.put('/update/:projectId');
project.delete('/delete/:projectId');

export default project;