import { Router } from "express";
import { createContentType, getContentTypesByProject, getContentTypeById, updateContentType, deleteContentType } from "../controllers/contentType.controller.js";

const contentType = Router();

contentType.post('/create', createContentType);
contentType.get('/project/:projectId', getContentTypesByProject);
contentType.get('/:contentTypeId', getContentTypeById);
contentType.put('/update/:contentTypeId', updateContentType);
contentType.delete('/delete/:contentTypeId', deleteContentType);

export default contentType;