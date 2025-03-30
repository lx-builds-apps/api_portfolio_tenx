import express from "express";
const router = express.Router();

const tasks = [

];

router.get(`/tasks`, (_req, res) => {
    res.json(({
        tasks
    }));
});

export default router;