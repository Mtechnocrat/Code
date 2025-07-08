import { createSlice ,nanoid } from "@reduxjs/toolkit";
// nanoid only generates unique id 

// Start with intialState means how to store will look at the stating  i.e being empty , or data being fetch from the database
// slices are nothing but features
const initialState={  // initial state can be an object as well as an array, it depends on the user
    todos:[{id:1,text:"Hello"}]
}

export const todoSlice=createSlice({ // this method most of the time used objects
    name:'todo',  //slices have names so that we can call them, name is upto the user
    initialState,
    reducers:{ // this is declaration of the reducers  , contains properties and functions , we have to define the function in reducer {whereas in contextApi we only have to declare method name do not have to define the object}
        addTodo:(state,action)=>{ // whenever we declare the function we have access to {State and Action } varible; //State variable always give the value that has been in initialState             //action is when we recieve some values from some operations
            const todo={
                id:nanoid(), // generate unique id
                text:action.payload   // payload is an object that contains multiple methods
            }
            state.todos.push(todo)  // this state varible have access to initalState varibale
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((items)=>items.id!==action.payload)
        }
    }
})
//we have to individually export the funtion to use reducer
export const {addTodo,removeTodo} = todoSlice.actions;


export default todoSlice.reducer; // we have to export default reducers for the store // becauce the store needs to know all about the reducers