import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTask } from '../redux/addTask';
import { toggleTask } from '../redux/addTask';
import { removeCompetedTask } from '../redux/addTask';

function List_Task() {
    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();

    const handelremove = (id) => {
        dispatch(removeTask(id));
    }

    const handeltoggle = (id) => {
        dispatch(toggleTask(id));
    }

    const handelClearCompleted = () => {
        dispatch(removeCompetedTask());
    }

    return (
            <div className="max-w-lg mx-auto mt-6 p-4 bg-white shadow-md rounded-lg">
                <ul className="space-y-2">
                    {
                        tasks.map(task => {
                            return <li
                                key={task.id}
                                className={`flex justify-between items-center p-2 border-b rounded-md ${task.completed ? "bg-green-100  text-gray-500" : "bg-gray-100"
                                    }`}
                            >
                                <span>{task.text}</span>
                                <div className="flex gap-2">
                                    <button onClick={() => handeltoggle(task.id)} className={`px-3 py-1 rounded-lg text-white transition ${task.completed ? "bg-yellow-500 hover:bg-yellow-600" : "bg-green-500 hover:bg-green-600"
                                        }`}
                                    >{task.completed ? "Undo" : "Complete"}</button>
                                    <button onClick={() => handelremove(task.id)} className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition">Remove</button>
                                </div>
                            </li>;
                        })
                    }
                </ul>
                {tasks.some((task) => task.completed) && (
                    <button onClick={() => handelClearCompleted()} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
                        Clear Completed
                    </button>
                )}
            </div>
       
    )
}

export default List_Task;
