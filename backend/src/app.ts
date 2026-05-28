import express from 'express'
//import cors from 'cors';

import project from './routes/project.route.js';
import contentType from './routes/contentType.route.js';
import field from './routes/field.route.js';
import errorMiddleware from './middleware/error.middleware.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/projects', project);
app.use('/content-types', contentType);
app.use('/fields', field);

app.use(errorMiddleware as any);

export default app;