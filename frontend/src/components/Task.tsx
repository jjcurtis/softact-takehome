import { useState, type Dispatch, type SetStateAction } from 'react'
import checked from '../assets/checked.svg'
import unchecked from '../assets/unchecked.svg'
import deleteButton from '../assets/deleteButton.svg'
import editButton from '../assets/editButton.svg'

export interface ITask {
    id: number,
    description: string,
    priority: number,
}

type Props = {
    id: number,
    description: string,
    priority: number,
    setTasks: Dispatch<SetStateAction<ITask[]>>
}
const Task = ({ id, description, priority, setTasks }: Props) => {
    const [isComplete, setIsComplete] = useState(false)
    const [newDescription, setNewDescription] = useState(description)
    const [updatingTask, setUpdatingTask] = useState(false)

    const priorityColor: Record<number, string> = {
        1: "bg-blue-200",
        2: "bg-blue-300",
        3: "bg-blue-400",
        4: "bg-green-500",
        5: "bg-green-600",
        6: "bg-yellow-500",
        7: "bg-yellow-600",
        8: "bg-red-500",
        9: "bg-red-600",
        10: "bg-red-700",
    } as const

    const editButtonStyles: Record<string, string> = {
        'updating': 'cursor-pointer animate-bounce stroke-yellow-200 px-1 rounded-sm',
        'notUpdating': 'cursor-pointer px-1 rounded-sm'
    } as const

    function toggleComplete() { setIsComplete(!isComplete) }

    function deleteTask(id: number): void {
        fetch(`http://localhost:3000/api/tasks/${id}`, { method: 'DELETE' })
        setTasks(previous => [...previous.filter(task => task.id !== id)])
    }

    function updateTask(id: number): void {
        setUpdatingTask(!updatingTask)

        // If finished updating task, find that task and update it
        if (updatingTask) {
            setTasks(previous =>
                [...previous
                    .with(previous.findIndex(task => task.id === id),
                        { id: id, description: newDescription, priority: priority })]
            )
            fetch(`http://localhost:3000/api/tasks/${id}`, {
                method: 'PUT',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ "id": id, "description": newDescription, "priority": Number(priority) })
            })
        }

    }

    return (
        <article className="p-3 border rounded-sm border-black text-lg">
            {
                updatingTask
                    ? <input onChange={e => setNewDescription(e.target.value)} className='bg-white' value={newDescription} />
                    : <p>{description}</p>
            }
            <div className='flex justify-between py-3'>
                <div className={`${priorityColor[priority]} px-2 rounded-sm`}>Priority {priority}</div>
                {
                    isComplete
                        ? <button className='cursor-pointer' onClick={toggleComplete}><img src={checked} width={30} /></button>
                        : <button className='cursor-pointer' onClick={toggleComplete}><img src={unchecked} width={30} /></button>
                }
                <button onClick={() => updateTask(id)} className={editButtonStyles[updatingTask ? 'updating' : 'notUpdating']}><img src={editButton} width={25} /></button>
                <button onClick={() => deleteTask(id)} className='cursor-pointer px-1 rounded-sm'><img src={deleteButton} width={25} /></button>
            </div>
        </article >
    )
}

export default Task

