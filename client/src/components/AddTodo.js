
import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
const url = process.env.url || "http://localhost:3000/todo/";


const AddTodo = () => {
    const [todos, setTodos] = useState([]);
    const [desc, setTask] = useState();

    useEffect(() => {
        axios.get(url)
            .then(res => setTodos(res.data))
            .catch(err => console.log(err))
    }, [])

    const handleAdd = () => {
        axios.post(url, { desc: desc })
            .then(result => {
                window.location.reload();
            })
            .catch(err => console.log(err))
    }

    const handleCheck = (id, completed) => {
        axios.put(`${url}check/${id}`, { id: id })
            .then(result => {
                // window.location.reload();
            })
            .catch(err => console.log(err))
        if (!completed) {
            window.location.reload();
        }
    }

    const allDelete = () => {
        const confirmation = window.confirm("Are you sure you want to delete all items?");
        if (confirmation) {
            axios.delete(url)
                .then(result => {
                    window.location.reload();
                })
                .catch(err => console.log(err))
        }
    }

    const handleDelete = (id) => {
        axios.delete(url + id)
            .then(result => {
                window.location.reload();
            })
            .catch(err => console.log(err))
    }

    const handleEdit = (id) => {
        const desc = window.prompt("Enter Description:");
        axios.put(url + id, { desc: desc, completed: false })
            .then(result => {
                window.location.reload();
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="flex-col flex items-center gap-10 pt-10 bg-blue-100 pb-32">

            <div className="flex gap-1">
                <input className="border text-xl rounded-lg shadow-lg" type="text" placeholder="Enter Todo" onChange={(e) => setTask(e.target.value)}></input>
                <button className="text-lg bg-gray-400 hover:bg-gray-500 rounded-xl p-2" onClick={handleAdd}>Add</button>
                <button className="text-lg bg-red-400 hover:bg-red-500 rounded-xl p-2" onClick={allDelete}>Clear All</button>
            </div>
            {
                todos.length === 0
                    ? <div className="text-2xl">No Todos</div>
                    : todos.map(todo => (
                        <div className='flex flex-col p-2 bg-blue-300 items-center mx-auto w-5/6 rounded-sm'>
                            <div className='flex gap-2 bg-blue-500 w-full p-2 justify-between items-center rounded-lg'>
                                <div className='flex gap-2 pl-1'>
                                    <div className={todo.completed ? 'checkbox hover:cursor-default' : 'checkbox hover:cursor-pointer'} onClick={() => handleCheck(todo.id, todo.completed)}>
                                        {todo.completed ?
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" viewBox="0 0 16 16">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                            </svg>
                                            :
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" viewBox="0 0 16 16">
                                                <circle cx="8" cy="8" r="8" />
                                            </svg>
                                        }
                                    </div>
                                    <div className={todo.completed ? "line-through text-xl p-2" : 'text-xl p-2'}>{todo.desc}</div>
                                </div>
                                <div className='flex gap-2'>
                                    <button className='text-xl bg-green-400 hover:bg-green-500 rounded-xl p-2' onClick={() => handleEdit(todo.id)}>Edit</button>
                                    <button className='text-xl bg-red-400 hover:bg-red-500 rounded-xl p-2' onClick={() => handleDelete(todo.id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    ))
            }
        </div>
    )
}

export default AddTodo;
