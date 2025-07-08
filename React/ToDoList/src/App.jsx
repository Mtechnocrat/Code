import { useEffect, useState } from "react";
import "./App.css";
import { ToDoProvider } from "./contexts/ToDoContext";
import TodoForm from "./components/TodoForm";
import TodoItems from "./components/TodoItems";


function App() {
  const [todos, setTodo] = useState([]);
  const addTodo =(todo)=>{
      setTodo((prev)=>[{id:Date.now(),...todo},...prev]);
  }

  const updateToDo=(id,todo)=>{
    setTodo((prev)=>prev.map((prevTodo)=>(prevTodo.id === id ? todo : prevTodo)));
  }

  const deleteToDo=(id)=>{
    setTodo((prev)=>prev.filter((eachValue)=>eachValue.id !==id));
  }

  const toggleComplete=(id)=>{
    setTodo((prev)=>prev.map((idx)=>idx.id === id ? {...idx,complete:!idx.complete} : idx))  // we can overwrite the values in spread opertator like {...value,"the value to be overwritten"}
  }// whenever we want to update a value in object we can first use spread operator to spread the value then we can update it


  useEffect(()=>{
    const log=JSON.parse(localStorage.getItem("todo") )// we first have to use getItems 
    

    if(log && log.length>0){
      setTodo(log);
    }
  
  },[]);

  // we can use more than one useEffect in a file
    // local storage have only two properties  : .get(key) and .set(key : value);
  useEffect(()=>{
      localStorage.setItem("todo",JSON.stringify(todos));
  },[todos])
  return (
    <ToDoProvider value={{toggleComplete,todos,addTodo,updateToDo,deleteToDo}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm/>

          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((item)=>(
              <div className="w-full" key={item.id}>
                <TodoItems todo={item}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ToDoProvider>
  );
}

export default App;
