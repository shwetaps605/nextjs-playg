import { addTask } from "@/utils/actions";


const TaskForm = () => {
    return(
        <form action={addTask}>
            <div className="flex">
                <input
                    type="text"
                    name="content"
                    required 
                    className="bg-white px-5 py-2 active:border-violet-300"
                    placeholder="enter task" 
                />
                <button 
                    className="bg-violet-300 text-white px-3"
                    type="submit">
                    Add Task
                </button>
            </div>
        </form>
        
    )
}

export default TaskForm;