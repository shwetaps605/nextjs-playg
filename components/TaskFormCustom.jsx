'use client'
import { addTaskCustom } from "@/utils/actions";
import { useEffect } from "react";
import { useFormStatus, useFormState } from "react-dom"
import toast from "react-hot-toast";


const SubmitBtn = () => {
    const { pending } = useFormStatus()
    return (
        <button 
            className="bg-violet-300 text-white px-3"
            type="submit"
            disabled={pending}>
            {pending ? "Please Wait" : 'Add task'}
        </button>
    )
}

const initialState = {
    message: null
}

const TaskFormCustom = () => {

    const [state, actionForm] = useFormState(addTaskCustom, initialState)

    useEffect(()=>{
        if(state.message === 'OOOPS') {
            toast.error('there was an error')
            return
        }
        if(state.message) {
            toast.success("Task created!!")
            return
        }
    },[state])

    return(
        <form action={actionForm}>
            {/* {state.message ? <p className="mb-2">{state.message}</p> : null} */}
            <div className="flex">
                <input
                    type="text"
                    name="content"
                    required 
                    className="bg-white px-5 py-2 active:border-violet-300"
                    placeholder="enter task" 
                />
                <SubmitBtn/>
            </div>
        </form>
    );
}

export default TaskFormCustom;