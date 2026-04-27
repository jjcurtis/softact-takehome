import { useState } from "react"
import type { ITask } from "./Task"

type Props = {
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}

const TaskForm = ({ setTasks }: Props) => {

    const [priority, setPriority] = useState("1")
    const [description, setDescription] = useState("")

    function postTask() {
        fetch("http://localhost:3000/api/tasks", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                "description": description,
                "priority": Number(priority)
            }),
        })
        setTasks(previous => [...previous, { id: 0, description: description, priority: Number(priority), isComplete: false }])
        setPriority("1")
        setDescription("")
    }

    return (
        <form className="flex gap-3 p-6">
            <label htmlFor="description">Description</label>
            <input value={description} onChange={(e) => setDescription(e.target.value)} className="bg-white" type="text" id="description" placeholder="Do some laundry" />
            <label htmlFor="priority">Priority</label>
            <select value={priority} onChange={(e) => setPriority(e.target.value)} className="bg-white" name="priority" id="priority">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
            <input onClick={postTask} className="border rounded-sm bg-blue-500 text-gray-100 hover:bg-blue-700 px-1" type="button" value="Submit" />
        </form>
    )
}

export default TaskForm
