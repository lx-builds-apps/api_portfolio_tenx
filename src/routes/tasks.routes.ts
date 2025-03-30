import express from "express";
import bodyParser from "body-parser";
const router = express.Router();

const jsonParser = bodyParser.json();

const ERROR_MESSAGE_400_NO_BODY = "400 Bad Request: body cannot be empty.";
const ERROR_MESSAGE_400_EMPTY_JSON_BODY = "400 Bad Request: body cannot be empty.";

const tasks: Task[] = [

];

router.get(`/tasks`, (_req, res) => {
    res.json(({
        tasks
    }));
});

interface Task {
    id?: number;
    name: string;
    description: string;
    status: "to-do" | "in-progress" | "done"
}

interface ErrorFeedback {
    code: number;
    message: string;
}

router.post(`/task`, jsonParser,  (req, res) => {
    const validationFeedback = validateCreateTaskRequest(req.body);

    if (validationFeedback) {
        res.status(validationFeedback.code).send(validationFeedback.message);
    }

    const task: Task = req.body;

    res.status(201).send(task);
});

/**
 * validate body when attempting to create a Task
 * @param {Task} body
 * @return {false | ErrorFeedback}
 */
const validateCreateTaskRequest = (body: Task): false | ErrorFeedback =>  {
    let feedback: ErrorFeedback | null = null;

    if (!body) {
        feedback = {
            code: 400,
            message: ERROR_MESSAGE_400_NO_BODY
        }
    } else if (!Object.entries(body).length) {
        feedback = {
            code: 400,
            message: ERROR_MESSAGE_400_EMPTY_JSON_BODY
        }
    }

    return feedback || false;
}

export default router;