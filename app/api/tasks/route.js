


import prisma from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async request => {
    const tasks = await prisma.task.findMany()
    return NextResponse.json({data: tasks});
}

export const POST = async request => {
    const data = await request.json()
    const task = await prisma.task.create({
        data: {
            content: data.content
        }
    })
    return NextResponse.json({data: task})
}