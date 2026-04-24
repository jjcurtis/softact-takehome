import { Router, Request, Response } from "express";

interface ITask {
    id: number,
    description: string,
    priority: number,
}

const tasks = Router();

tasks.get("/", (req: Request, res: Response) => {
    const allTasks: ITask[] = [
        {
            id: 1,
            description: "Task One",
            priority: 8
        },
        {
            id: 2,
            description: "Task Two",
            priority: 3
        },
        {
            id: 3,
            description: "Task Three",
            priority: 6
        },
    ]

    res.json(allTasks)
})

export default tasks
