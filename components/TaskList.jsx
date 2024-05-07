import prisma from "@/utils/db";


const TaskList = async() => {
    const tasks = await prisma.task.findMany({
        orderBy:{
            createdAt: 'desc'
        }
    })
    return(
        <ul className="flex flex-col gap-2 mt-5">
            {tasks.map(task => <li key={task.id}
            className="bg-white flex items-center justify-between px-5 py-2 rounded-lg border-indigo-200 border-2 shadow-md text-black">
                        <p className={`text-lg capitalize ${task.completed ? 'line-through' : null}`}>{task.content}</p>
                        <div className="w-[20%] flex justify-between">
                            <button className="bg-sky-200 px-2 py-1 rounded-sm">Edit</button>
                            <button className="bg-red-300 px-2 py-1 rounded-sm">Delete</button>
                        </div>
            </li>)}

        </ul>
    )
}

export default TaskList;