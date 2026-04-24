import './App.css'
import Task from './components/Task'
import TaskForm from './components/TaskForm'
import TaskGrid from './components/TaskGrid'

function App() {

    return (
        <>
            <TaskGrid>
                <Task id={1} description={'First Task'} priority={10} />
                <Task id={2} description={'Second Task'} priority={10} />
                <Task id={3} description={'Third Task'} priority={10} />
                <Task id={4} description={'Fourth Task'} priority={10} />
            </TaskGrid>
            <TaskForm />
        </>
    )
}

export default App
