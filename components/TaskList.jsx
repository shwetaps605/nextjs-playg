import { getAllTasks } from "@/utils/actions";
import DeleteForm from "./DeleteForm";
import Link from "next/link";

const TaskList = async() => {
    const tasks = await getAllTasks();

    return(
        <ul className="flex flex-col gap-2 mt-5 w-[50%]">
            {tasks.map(task => <li key={task.id}
            className="bg-white flex items-center justify-between px-5 py-2 rounded-lg border-indigo-200 border-2 shadow-md text-black">
                        <p className={`text-lg capitalize ${task.completed ? 'line-through' : null}`}>{task.content}</p>
                        <div className="right gap-3 flex justify-between">
                            <Link href={`/tasks/${task.id}`}>
                                <button className="bg-sky-200 px-2 py-1 rounded-sm">Edit</button>
                            </Link>
                            <DeleteForm id={task.id}/>
                        </div>
            </li>)}
        </ul>
    )
}

export default TaskList;