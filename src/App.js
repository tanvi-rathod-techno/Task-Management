import './App.css';
import ADD_Task from './component/ADD_TASK';
import List_Task from './component/LIST_TASK';

function App() {
  return (
    <div className="App">
      <h1 className="text-4xl font-bold text-center text-blue-500 mt-4 mb-8">Task Management</h1>
      <ADD_Task />
      <List_Task />
    </div>
  );
}

export default App;
