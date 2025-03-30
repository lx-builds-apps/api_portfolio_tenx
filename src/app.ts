import express from 'express';
import TasksRouter from './routes/tasks.routes'

const app = express();

const port = 8080;

app.use((_req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.setHeader('Content-Type', 'application/json');

    next();
});
app.listen(port, (err: Error) => {
    if (err) {
        console.error(err);
    }


    app.use(TasksRouter);

    console.log(`lx.build.apps API Portfolio listening on port ${port}`);
});