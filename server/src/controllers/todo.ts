import { PrismaClient } from "@prisma/client"

const prisma= new PrismaClient;

async function createTodo(todoDesc:string) {
    const Todo= await prisma.todo.create({
        data:{
            desc:todoDesc
        },
    });
    return Todo;
}

async function getAllTodo(){
    const Todo = await prisma.todo.findMany({});
    return Todo;
}

async function updateTodo(id:number,desc:string,completed:boolean){
    await prisma.todo.update({
        where:{
            id:id
        },
        data:{
            desc:desc,
            completed:completed
        }
    })
}

async function getTodo(id:number){
    const todo=await prisma.todo.findUnique({
        where:{
            id:id
        }
    });
    return todo;
}

async function deleteTodo(id:number){
    await prisma.todo.delete({
        where:{
            id:id
        }
    })
}

async function deleteAllTodo(){
    await prisma.todo.deleteMany({});
}

async function checkTodo(id:number) {
    await prisma.todo.update({
        where:{
            id:id
        },
        data:{
            completed:true
        }
    })
}

module.exports = { createTodo,getAllTodo,updateTodo,getTodo,deleteTodo,deleteAllTodo,checkTodo}