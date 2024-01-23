import express, { Request, Response } from 'express';
import taskRoutes from './src/routes/tasks';
import path from 'path';
import dotenv from 'dotenv';

const app = express(); // initializes express server
dotenv.config(); // using dotenv module, load the .env config file from current directory
const port = process.env.PORT || 3001;
const environment = process.env.NODE_ENV || "local";

app.use(express.json()); // This line enables JSON parsing in the request body
app.use('/api', taskRoutes); // This line mounts the Task API routes

/**
 * If environment is not local, serve the dist folder from client
 */
if (environment != "local") {
  app.use(express.static(path.join(__dirname, 'client/dist')));
  app.get('*', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname + '/client/dist/index.html'));
  });
}

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});