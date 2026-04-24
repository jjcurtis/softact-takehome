
const TaskForm = () => {

    return (
        <form className="flex gap-3 p-6" action="">
            <label htmlFor="description">Description</label>
            <input className="bg-white" type="text" id="description" placeholder="Do some laundry" />
            <label htmlFor="priority">Priority</label>
            <select className="bg-white" name="priority" id="priority">
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
            <input className="border rounded-sm bg-blue-500 text-gray-100 hover:bg-blue-700 px-1" type="submit" value="Submit" />
        </form>
    )
}

export default TaskForm
