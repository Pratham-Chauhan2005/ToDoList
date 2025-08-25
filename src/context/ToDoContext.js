import { createContext,useContext } from "react";

export const TodoContext = createContext({
    // here we create on array which contain list of all the todo.
    // we have 4 function(methods) which are only defined here and not initialised.
    // here the info of single todo is stored in form of object.
    todos:[{        
        id:1,
        todo : "Todo",
        complete : false,

    }],
    addTodo:(todo) => {},
    updateTodo : (id,todo) => {},
    deleteTodo : (id) => {},
    toogleComplete : (id) => {},
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider