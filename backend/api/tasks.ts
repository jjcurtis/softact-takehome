import { Router, Request, Response } from "express";

interface ITask {
    id: number,
    description: string,
    priority: number,
    isComplete: boolean
}

const tasks = Router();

let id = 0;

function incrementId(): number {
    id += 1
    return id
}

let inMemoryTaskRepository: ITask[] = [
    {
        id: incrementId(),
        description: "Task One",
        priority: 8,
        isComplete: false
    },
    {
        id: incrementId(),
        description: "Task Two",
        priority: 3,
        isComplete: false
    },
    {
        id: incrementId(),
        description: "Task Three",
        priority: 6,
        isComplete: true
    },
]

tasks.get("/", (req: Request, res: Response) => {
    return res.json(inMemoryTaskRepository)
})

tasks.post("/", (req: Request, res: Response) => {
    inMemoryTaskRepository.push({
        id: incrementId(),
        description: req.body.description,
        priority: req.body.priority,
        isComplete: false
    })
    return res.status(201)
})

tasks.delete("/:id", (req: Request, res: Response) => {
    const target = inMemoryTaskRepository.findIndex((task) => task.id === Number(req.params.id))

    if (target === 0) { inMemoryTaskRepository.shift() }

    if (target) {
        inMemoryTaskRepository.splice(target, 1);
        return res.status(204)
    }
})

tasks.put("/:id", (req: Request, res: Response) => {
    const target = inMemoryTaskRepository.findIndex((task) => task.id === Number(req.params.id))

    inMemoryTaskRepository = inMemoryTaskRepository.with(target, {
        id: Number(req.params.id),
        description: req.body.description,
        priority: req.body.priority,
        isComplete: req.body.isComplete
    })

    return res.status(200)
})

export default tasks
