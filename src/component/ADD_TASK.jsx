import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {addTask} from '../redux/addTask';


function ADD_Task(){
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
        dispatch(addTask(text));
        }
        setText("");
    }

   return (
    <>
    <div className="flex justify-center mt-4">
        <form onSubmit ={handleSubmit} className="flex gap-2 bg-white shadow-md p-4 rounded-lg"  placeholder="Enter task...">
        <input type="text" onChange={(e) => setText(e.target.value)} value={text}  className="border border-gray-300 rounded-lg p-2 w-72 focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">Add Task</button>
        </form>
    </div>
    </>
   );
}

export default ADD_Task;