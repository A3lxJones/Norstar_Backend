import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use('/api', routes);

// basic health endpoint at root as well
app.get('/', (_req, res) => res.json({ message: 'Norstar backend', status: 'ok' }));

export default app;
