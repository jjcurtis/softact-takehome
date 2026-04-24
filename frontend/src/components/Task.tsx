import { useState } from 'react'
import checked from '../assets/checked.svg'
import unchecked from '../assets/unchecked.svg'

export interface ITask {
    id: number,
    description: string,
    priority: number,
}

const Task = ({ id, description, priority }: ITask) => {
    const [isComplete, setIsComplete] = useState(false)

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
    }

    function toggleComplete() { setIsComplete(!isComplete) }

    return (
        <article className="flex justify-between p-2 border rounded-sm border-black text-lg">
            <div>{id}</div>
            <p>{description}</p>
            <div className={priorityColor[priority]}>{priority}</div>
            {
                isComplete
                    ? <button onClick={toggleComplete}><img src={checked} width={30} /></button>
                    : <button onClick={toggleComplete}><img src={unchecked} width={30} /></button>
            }
        </article>
    )
}

export default Task

