import React from 'react';
import TaskList from './components/TaskList.js';
import TaskForm from './components/TaskForm.js';
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

  const removeTask = (id) => {
    setTask(prevTask => {
      const updatedtask = prevTask.filter(task => task.id !==id);
      return updatedtask;
    })
  }
  const addTaskCallBack  (newTaskData) => {
    axios.post('urlforposting',newTaskData)
    .then(response => {
      const taskList = [...tasks]
      taskList.push({
        title: response.data.title
      })
      setTask(taskList)
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <TaskForm addTaskCallBack={addTaskCallBack}></TaskForm>
        <div>{<TaskList tasks={tasks} toggleTask = {toggleTask} removeTask = {removeTask}/>}</div>
      </main>
    </div>
  );
};

export default App;
