import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';

const TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
];

const App = () => {
  const [tasks, setTask] = React.useState(TASKS);

  const toggleTask = (id) => {
    setTask(prevTask => {
      const updatedtask = prevTask.map(task => {
        return task.id ==id ? {...task, isComplete: !task.isComplete} : task
      })
    return updatedtask;
    })
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>{<TaskList tasks={tasks} toggleTask = {toggleTask}/>}</div>
      </main>
    </div>
  );
};

export default App;
