import { Router } from "express";
import { createContentType } from "../controllers/contentType.controller.js";

const contentType = Router();

contentType.post('/create', createContentType);

export default contentType;