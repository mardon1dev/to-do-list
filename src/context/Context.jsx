import { createContext, useState } from "react";

export const Context = createContext();

export const TodoContext = ({children}) => {

    const [openAddModal, setOpenAddModal] = useState(false);

    function handleAddModal () {
        setOpenAddModal(!openAddModal);
    }

    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);
    localStorage.setItem("todos", JSON.stringify(todos));
    function addTodos(todo){
        setTodos([...todos, todo])
    }

    function deleteTodo(id){
        const newTodos = todos.filter(item => item.id !== id);
        setTodos([...newTodos])
    }

    function updateTodo(obj, updatedObj){

        obj.title = updatedObj.title;
        obj.description = updatedObj.description;
        obj.date = updatedObj.date;
        obj.completed = updatedObj.completed
        setTodos([...todos])
    }
    function handleCompleted () {
        setTodos([...todos])
    }
    return(
        <Context.Provider value={{todos, addTodos, deleteTodo, updateTodo, openAddModal, handleAddModal, handleCompleted}}>{children}</Context.Provider>
    )
}