import type { ReactNode } from "react"

type Props = {
    children: ReactNode
}

const TaskGrid = ({ children }: Props) => {

    return (
        <div className="h-3/4">
            <section className="grid p-6 gap-4 grid-cols-4">
                {children}
            </section>
        </div>
    )
}

export default TaskGrid
