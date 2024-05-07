import prisma from "@/utils/db"
import { revalidatePath } from "next/cache"
//formData: out of the box web api that gives form data
const createTask = async (formData) => {
    'use server'
    const content = formData.get('content')
    console.log("content->", content)
    await prisma.task.create({
        data:{
            content: content
        }
    })
    revalidatePath('/tasks')

}


const TaskForm = () => {
    return(
        <form action={createTask}>
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