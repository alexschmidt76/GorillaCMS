import express from 'express'

import project from './routes/project.route.js';
import contentType from './routes/contentType.route.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/projects', project);
app.use('/content-types', contentType);

app.get('/', (_req, res) => {
    res.send('<h1>Backend reached!</h1>');
});

export default app;