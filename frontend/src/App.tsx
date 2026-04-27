import { useEffect, useState } from 'react'
import './App.css'
import Task, { type ITask } from './components/Task'
import TaskForm from './components/TaskForm'
import TaskGrid from './components/TaskGrid'

function App() {
    const [tasks, setTasks] = useState<ITask[]>([])

    useEffect(() => {
        getTasks()
    }, [])

    async function getTasks() {
        const tasks = await fetch("http://localhost:3000/api/tasks")
        const data: ITask[] = await tasks.json()
        setTasks(data)
    }

    return (
        <>
            <TaskGrid>
                {
                    tasks.map((task, index) =>
                        <Task key={index} id={task.id} description={task.description} priority={task.priority} complete={task.isComplete} setTasks={setTasks} />
                    )
                }
            </TaskGrid>
            <TaskForm setTasks={setTasks} />
        </>
    )
}

export default App
