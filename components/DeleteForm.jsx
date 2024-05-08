const { deleteTask } = require("@/utils/actions")


const DeleteForm = ({id}) => {
    return(
        <form action={deleteTask}>
            <input type="hidden" name="id" value={id}/>
            <button className="bg-red-300 px-2 py-1 rounded-sm"type="submit">Delete</button>
        </form>
    )
}

export default DeleteForm;