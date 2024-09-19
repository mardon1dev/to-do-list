import React, { useContext, useState, useRef } from 'react'
import { Context } from '../context/Context'
import Modal from './Modal'
import { DeleteIcon, EditIcon } from '../assets/icon'
const List = () => {
    const {todos, deleteTodo, updateTodo, handleCompleted} = useContext(Context)

    const [modal, setModal] = useState(false)
    const [updatedId, setUpdatedId] = useState(null);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");

    function handleUpdate(id){
        setModal(true)
        setUpdatedId(id);
        const findTodo = todos.find(item => item.id == id);
        setTitle(findTodo.title);
        setDescription(findTodo.description);
        setDate(findTodo.date);
    }

    function handleUpdatedTodo (e){
        e.preventDefault();
        const findTodo = todos.find(item => item.id == updatedId);
        updateTodo(findTodo, {
            title,description,date,completed:false
        })
        setModal(false)
    }

    function handleCompletedTodo (id) {
        const findTodo = todos.find(item => item.id == id);
        findTodo.completed = !findTodo.completed
        handleCompleted()
    }
  return (
    <div className='w-full flex flex-col gap-4 pt-4 px-1 h-[350px] overflow-scroll list-wrapper'>
        {todos.map((item, index) => (
            <div className='w-full flex justify-between items-start gap-3' key={index}>
                <label className="checkbox-wrapper">
                  <input type="checkbox" checked={item.completed || false} onChange={()=>handleCompletedTodo(item.id)} />
                  <svg viewBox="0 0 64 64" height="20" width="20">
                    <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" className="path"></path>
                  </svg>
                </label>
                <div className='w-full flex justify-between items-start'>
                    <div className='flex flex-col items-start space-x-2'>
                        <span className={`${item.completed ? "line-through" : ""} font-semibold`}>{item.title}</span>
                        <span className='text-sm'>{item.description}</span>
                        <span className='text-sm text-red-700'>{item.date}</span>
                    </div>
                    <div className='flex items-center space-x-3'>
                        <button className='text-black' onClick={()=>handleUpdate(item.id)}><EditIcon /></button>
                        <button className='text-black' onClick={() => deleteTodo(item.id)}><DeleteIcon /></button>
                    </div>
                </div>
            </div>
        ))}
            <Modal modal={modal} setModal={setModal}>
                <form onSubmit={handleUpdatedTodo} className='w-full flex flex-col mt-2 gap-3 p-2' autoComplete='off'>
                    <label htmlFor="title">
                        <span className='text-sm'>Title <span className='text-red-700'>*</span></span>
                        <input value={title} onChange={(e)=>setTitle(e.target.value)} className='p-2 border border-[#000000]/30 outline-none rounded-lg text-[14px] w-full mt-1' name='title' type="text" placeholder='Add todo' required/>
                    </label>
                    <label htmlFor="description">
                        <span className='text-sm'>Description (Optional)</span>
                        <input value={description} onChange={(e) => setDescription(e.target.value)} className='p-2 border border-[#000000]/30 outline-none rounded-lg w-full text-[14px] mt-1' name='description' type="text" placeholder='Description' />
                    </label>
                    <label htmlFor="time">
                        <span className='text-sm'>Time <span className='text-red-700'>*</span></span>
                        <input value={date} onChange={(e)=> setDate(e.target.value)} className='p-2 border border-[#000000]/30 outline-none rounded-lg w-full text-[14px] mt-1' name='time' type="date"  required/>
                    </label>
                    <button className='py-2 px-4 bg-[#000000]/80 text-white rounded-lg'>Update</button>
                </form>
            </Modal>
    </div>
  )
}

export default List