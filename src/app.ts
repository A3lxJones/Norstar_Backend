import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
// mount API routes (routes/index.ts defines /health)
app.use('/api', routes);

export default app;

