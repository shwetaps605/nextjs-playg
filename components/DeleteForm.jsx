'use client'
const { deleteTask } = require("@/utils/actions")
import { useEffect } from 'react';
import { useFormStatus, useFormState } from 'react-dom'
import toast from 'react-hot-toast';

const SubmitBtn = () => {
    const { pending } = useFormStatus();
    return(
    <button 
        className="bg-red-300 px-2 py-1 rounded-sm"
        type="submit"
        disabled={pending}>
            {pending ? 'pending...' : 'Delete'}
        </button>
    )
}

const initialState = {
    message: null
}


const DeleteForm = ({id}) => {
    const [ state, formAction] = useFormState(deleteTask,initialState)
    console.log("STATE-->",state);
    useEffect(()=>{
        if(state.message === 'error') {
            toast.error("Soory task could not be deleted")
            return
        }
        if(state.message) {
            toast.success("Task deleted!")
            return
        }
    },[state])


    return(
        <form action={formAction}>
            <input type="hidden" name="id" value={id}/>
            <SubmitBtn />
        </form>
    )
}

export default DeleteForm;