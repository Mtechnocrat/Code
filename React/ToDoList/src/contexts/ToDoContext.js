import React from "react";
import { useContext , createContext } from "react";

export  const ToDoContext=createContext({
    todos :[
        {
            id:1,
            todo:"Random Message",
            complete:"false"

        },
    ],
    addTodo : (todo)=>{}, // defination will be given by each components if they want to use it;
    updateToDo:(id,todo)=>{},
    deleteToDo:(id)=>{},
    toggleComplete:(id)=>{}
    
});

export const useTodo=()=>{  // we will be making this so that we don't have to repeat useContext in the code
    return useContext(ToDoContext); // we will have to pass an context in  the argument 
}

// Context API is not for large project 
// if we want to pass a method in context api we don't define the method, we just declare the method name there, the declartion of what the method will do will occur in function where it has been called .

export const ToDoProvider=ToDoContext.Provider;