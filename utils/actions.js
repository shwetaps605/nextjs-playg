'use server'
import prisma from "./db"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


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

export const deleteTask = async formData => {
    const id = formData.get('id');
    await prisma.task.delete({
        where: {
            id
        }
    });
    revalidatePath("/tasks");
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