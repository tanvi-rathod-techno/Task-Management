import { createSlice } from "@reduxjs/toolkit";

const loadTasks = () => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
};

const saveTasks = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

const task_event = createSlice({
    name: "tasks",
    initialState: loadTasks(),
    reducers: {
        addTask: (state, action) => {
            state.push({ id: Date.now(), text: action.payload, completed: false });
            saveTasks(state);
        },
        removeTask :(state,action)=>{
            const newState = state.filter((task) => task.id !== action.payload);
            saveTasks(newState);
            return newState;
        },
        toggleTask :(state,action)=>{
            const task = state.find((task) => task.id === action.payload);
            if (task) task.completed = !task.completed;
            saveTasks(state);
        },
        editTask:(state,action) => {
            const task = state.find((task) => task.id === action.payload.id);
            if (task) {
                task.text = action.payload.newText; 
                saveTasks(state);
            }
        },
        removeCompetedTask:(state,action)=>{
            const newState = state.filter((task) => !task.completed);
            saveTasks(newState);
            return newState;
        }
        
    }
});

export const { addTask ,removeTask ,toggleTask ,editTask,removeCompetedTask} = task_event.actions;
export default task_event.reducer;
