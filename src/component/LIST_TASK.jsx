import React ,{ useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTask } from '../redux/addTask';
import { toggleTask } from '../redux/addTask';
import { editTask } from '../redux/addTask';
import { removeCompetedTask } from '../redux/addTask';

function List_Task() {
    const tasks = useSelector(state => state.tasks);
    const [filter,setFilter] = useState('all');
    const [editingId, setEditingId] = useState(null);
    const [newText, setNewText] = useState('');
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

    const handeledit = () => {
        if (newText.trim()) {
        dispatch(editTask({id: editingId, newText}));
        setNewText('');
        setEditingId(null); 
        }
    }

    const handlecancel = () => {
        setEditingId(null); 
        setNewText('');

    }

    const handelfilter = tasks.filter((task) =>{
        if (filter === 'completed') return task.completed;
        if (filter === 'active') return !task.completed;
        return true;
    }) 

    return (
            <div className="max-w-lg mx-auto mt-6 p-4 bg-white shadow-md rounded-lg">
            <div className="flex gap-4 mb-4">
                <button onClick={() => setFilter('all')} className="px-3 py-1 bg-blue-500 text-white rounded">
                    All
                </button>
                <button onClick={() => setFilter('active')} className="px-3 py-1 bg-yellow-500 text-white rounded">
                    Active
                </button>
                <button onClick={() => setFilter('completed')} className="px-3 py-1 bg-green-500 text-white rounded">
                    Completed
                </button>
            </div>
                <ul className="space-y-2">
                    {
                        handelfilter.map(task => {
                            return <li key={task.id} className={`flex justify-between items-center p-2 border-b rounded-md ${task.completed ? "bg-green-100 text-gray-500" : "bg-gray-100"}`}>
                                {editingId === task.id ? (
                                <div>
                                    <input
                                        type="text"
                                        value={newText}
                                        onChange={(e) => setNewText(e.target.value)}
                                        className="edit-input"
                                    />
                                    <div className="flex gap-4 mt-4">
                                    <button onClick={handeledit} className="px-4 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">Save</button>
                                    <button onClick={handlecancel} className="px-4 py-1 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-300">Cancel</button>
                                    </div>
                                </div>
                            ) : (
                                <span className={task.completed ? 'completed-task' : ''}>
                                    {task.text}
                                </span>
                            )}
                                <div className="flex gap-2">
                                    <button onClick={() => handeltoggle(task.id)} className={`px-3 py-1 rounded-lg text-white transition ${task.completed ? "bg-yellow-500 hover:bg-yellow-600" : "bg-green-500 hover:bg-green-600"
                                        }`}
                                    >{task.completed ? "Undo" : "Complete"}</button>
                                      <button onClick={() => { setEditingId(task.id); setNewText(task.text); }} className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition">
                                        Edit
                                    </button>
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
