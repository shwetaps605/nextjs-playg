import TaskList from "@/components/TaskList";
import TaskForm from "@/components/TaskForm";
import TaskFormCustom from "@/components/TaskFormCustom";

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