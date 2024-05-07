import TaskList from "@/components/TaskList";
import TaskForm from "@/components/TaskForm";


const TasksPage = () => {
    return(
        <section>
         <TaskForm/>
         <TaskList />
        </section>
     )
}

export default TasksPage;