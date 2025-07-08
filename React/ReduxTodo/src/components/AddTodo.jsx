import React, { useState } from 'react'
import {useDispatch} from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

const AddTodo = () => {
    const [input, setInput] = useState('');
    const dispatch=useDispatch();  // dispatcher uses a reducers to edit values in store // useDispatch >> reducer >> store (To edit values)
    const addToHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));  // we have to call the reduces inside the dispatcher 
        setInput('');
    }

    return (
        <div>
            <form onSubmit={addToHandler}>
                <input type="text" className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
                placeholder='Enter the task ... ' value={input} onChange={(e) => setInput(e.target.value)} />
                <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" type='submit'> Add To Do</button>
            </form>
        </div>
    )
}

export default AddTodo