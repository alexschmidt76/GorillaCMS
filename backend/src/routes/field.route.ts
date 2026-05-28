import { Router } from "express";
import { createField, getFieldsByContentType, getFieldById, updateField, deleteField } from "../controllers/field.controller.js";

const field = Router();

field.post('/create', createField);
field.get('/content-type/:contentTypeId', getFieldsByContentType);
field.get('/:fieldId', getFieldById);
field.put('/update/:fieldId', updateField);
field.delete('/delete/:fieldId', deleteField);

export default field;
