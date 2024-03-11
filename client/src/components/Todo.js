import React from 'react'

const Todo = () => {
    return (
        <div className='flex flex-col p-2 bg-blue-300 items-center mx-auto w-5/6 rounded-sm'>
            <div className='flex gap-2 bg-blue-500 w-full p-2 justify-between items-center rounded-lg'>
                <div className='flex gap-2 pl-1'>
                    <input type='checkbox' checked readOnly></input>
                    <div className='text-xl p-2'>Ok</div>
                </div>
                <div className='flex gap-2'>
                    <button className='text-xl bg-green-400 hover:bg-green-500 rounded-xl p-2'>Edit</button>
                    <button className='text-xl bg-red-400 hover:bg-red-500 rounded-xl p-2'>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Todo