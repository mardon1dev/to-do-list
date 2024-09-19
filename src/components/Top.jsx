import React, { useContext } from 'react'
import { Context } from '../context/Context'

const Top = () => {

    const {handleAddModal, todos} = useContext(Context)

    const handleOpenAddModal = () => {
        handleAddModal()
    }
  return (
    <div className='flex items-center justify-between mb-2'>
    <div className='flex flex-col'>
      <span className='text-lg font-semibold'>My tasks</span>
      <span className='text-sm'>You have {todos.filter(item => item.completed == false).length} tasks left!</span>
    </div>
    <button onClick={handleOpenAddModal} className='py-2 px-4 bg-[#000000]/80 text-white rounded-lg'>Add task</button>
  </div>
  )
}

export default Top