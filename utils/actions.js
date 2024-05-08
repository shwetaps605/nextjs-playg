'use server'
import prisma from "./db"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {z} from "zod";


export const getAllTasks = async () => {
    return await prisma.task.findMany({
        orderBy:{
            createdAt: "desc"
        }
    });
}

//formData: out of the box web api that gives form data
export const addTask = async formData => {
    const content = formData.get('content')
    console.log("content->", content)
    await prisma.task.create({
        data:{
            content: content
        }
    });
    revalidatePath('/tasks');
}

export const addTaskCustom = async (prevState,formData) => {
    //await new Promise(resolve => setTimeout(resolve,1000))
    const content = formData.get('content')
    const Task = z.object({
        content: z.string().min(5)
    });
    try {
        Task.parse({ content })
        await prisma.task.create({
            data:{
                content: content
            }
        })
        revalidatePath('/tasks')
        return { message: "Task added succesfully"}
    } 
    catch(error) {
        return { message: "OOOPS"}
    }
   
}

export const deleteTask = async (prevState,formData) => {
    const id = formData.get('id');
    try{
        await prisma.task.delete({
            where: {
                id
            }
        });
        revalidatePath("/tasks");
        return { message: 'success '}
    } catch(e) {
        return { message: 'error '}
    }
    
}


export const getTask = async id => {
    return await prisma.task.findUnique({
        where:{
            id
        }
    })
}

export const updateTask = async formData => {
    const content = formData.get('content')
    const id = formData.get('id')
    const completed = formData.get('completed')
    await prisma.task.update({
        where: {id},
        data: { 
            content, 
            completed: completed === 'on' ? true : false

        }
    });
    redirect("/tasks");
}