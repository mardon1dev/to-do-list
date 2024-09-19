import React, { useContext, useRef } from 'react'
import { Context } from '../context/Context'
import { BackIcon } from '../assets/icon';

const Form = () => {
    const {addTodos, todos, openAddModal, handleAddModal} = useContext(Context);
    const inputRef = useRef();
    const decRef = useRef()
    const dateRef = useRef()

    function BackFunc () {
        handleAddModal()
    }

    function handleAddTodo(e){
        e.preventDefault();
        if (inputRef.current.value == "") {
            alert("Add value")
            
        }
        else{
            const todo  = {
                id: todos.length ? todos[todos.length - 1].id + 1 : 1,
                title: inputRef.current.value,
                description:decRef.current.value,
                date: dateRef.current.value,
                completed: false
            }
            addTodos(todo)
            e.target.reset()
            handleAddModal()
        }
    }
  return (
    <div className={`w-full ${openAddModal ? "flex" : "hidden"} absolute top-[50px] h-auto left-0 flex-col items-start bg-[#ffffff] rounded-lg justify-start p-2 `}>
        <div className='w-full flex items-center justify-between'>
            <span className='text-xl font-semibold'>Add Task</span>
            <button onClick={BackFunc}>
                <BackIcon />
            </button>
        </div>
        <form onSubmit={handleAddTodo} className='w-full flex flex-col mt-2 gap-3' autoComplete='off'>
            <label htmlFor="title">
                <span className='text-sm'>Title <span className='text-red-700'>*</span></span>
                <input ref={inputRef} className='p-2 border border-[#000000]/30 outline-none rounded-lg text-[14px] w-full mt-1' name='title' type="text" placeholder='Add todo' required/>
            </label>
            <label htmlFor="description">
                <span className='text-sm'>Description (Optional)</span>
                <input ref={decRef} className='p-2 border border-[#000000]/30 outline-none rounded-lg w-full text-[14px] mt-1' name='description' type="text" placeholder='Description' />
            </label>
            <label htmlFor="time">
                <span className='text-sm'>Time <span className='text-red-700'>*</span></span>
                <input ref={dateRef} className='p-2 border border-[#000000]/30 outline-none rounded-lg w-full text-[14px] mt-1' name='time' type="date"  required/>
            </label>
            <button className='py-2 px-4 bg-[#000000]/80 text-white rounded-lg'>Add</button>
        </form>
    </div>
  )
}

export default Form