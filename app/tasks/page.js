import TaskList from "@/components/TaskList";
import TaskFormCustom from "@/components/TaskFormCustom";

export const dynamic = 'force-dynamic';

const TasksPage = () => {
    return(
        <section>
         {/* <TaskForm/> */}
         <TaskFormCustom/>
         <TaskList />
        </section>
     )
}

export default TasksPage;