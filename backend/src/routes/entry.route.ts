import { Router } from "express";
import { createEntry } from "../controllers/entry.controllers.js";

const entry = Router();

entry.post('/create', createEntry);