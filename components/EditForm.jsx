import { getTask, updateTask } from "@/utils/actions"


const EditForm = async ({id}) => {
    const {content, completed} = await getTask(id);

    return(
        <form action={updateTask}>
            <div className="flex mt-5 flex-col gap-5">
            <input 
                type="text" 
                name="content" 
                defaultValue={content}
                required
                className="bg-white px-5 py-2 active:border-violet-300"
            />
            <div className="form-control">
                <label htmlFor="completed" className="flex gap-5 items-center mb-5">
                    <span className="text-lg text-black">completed?</span>
                    <input
                        className="checkbox checkbox-primary checkbox-sm"
                        type="checkbox" 
                        defaultChecked={completed}
                        id="completed"
                        name="completed"
                    />
                </label>
            </div>
            <input type="hidden" name="id" value={id}/>
            </div>
            <button className="bg-violet-300 text-white px-3" type="submit">Update</button>
        </form>
    )
}

export default EditForm;