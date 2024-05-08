import EditForm from "@/components/EditForm";
import Link from "next/link";


const TaskPage = ({params}) => {
    return(
        <div>
            <div className="mb-10">
                <Link href="/tasks" className="btn btn-accent">Back to Tasks</Link>
            </div>
            <EditForm id={params.id}/>
            
        </div>
    );
}

export default TaskPage;