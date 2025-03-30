import express from 'express';
import TasksRouter from './routes/tasks.routes'
const app = express();

const port = 8080;
app.listen(port, (err: Error) => {
    if (err) {
        console.error(err);
    }

    app.use(TasksRouter);

    console.log(`lx.build.apps API Portfolio listening on port ${port}`);
});