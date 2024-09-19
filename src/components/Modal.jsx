import React from 'react'

const Modal = ({children, modal, setModal}) => {
  return (
    <div onClick={(e)=> e.target.id == "wrapper" ? setModal(false) : ""} id='wrapper' className={`w-full absolute top-[50px] left-0 flex items-start bg-[#ffffff] rounded-lg justify-start h-auto ${modal ? "scale-100" : "scale-0"} duration-200`}>
      {children}
    </div>
  )
}

export default Modal