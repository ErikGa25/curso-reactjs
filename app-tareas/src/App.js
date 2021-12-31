import { useState, useEffect } from 'react';
import './App.css';
import {TaskRow} from './components/TaskRow';
import {TaskBanner} from './components/TaskBaner';
import {TaskCreator} from './components/TaskCreator';
import {VisibilityControl} from './components/VisibilityControl';

function App() {

  const [userName, setUserName] = useState('fazt');
  const [taskItem, setTaskItem] = useState([
    {name: 'Task One', done: false},
    {name: 'Task Two', done: false},
    {name: 'Task Three', done: true},
    {name: 'Task Four', done: false},
  ]);

  const [showCompleted, setShowCompleted] = useState(true)

  useEffect(() => {
    let data = localStorage.getItem('tasks');
    if(data != null) {
      setTaskItem(JSON.parse(data));
    } else {
      setUserName('Fazt Example');
      setTaskItem([
        {name: 'Task One Example', done: false},
      {name: 'Task Two Example', done: false},
      {name: 'Task Three Example', done: true},
      {name: 'Task Four Example', done: false},
      ]);
      setShowCompleted(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskItem));
  }, [taskItem])

  const createNewTask = taskName => {
    if(!taskItem.find(t => t.name === taskName)) {
      setTaskItem([...taskItem, {name: taskName, done: false}]);
    }
  }

  const toggleTask = task => {
    setTaskItem(taskItem.map( t => ( t.name === task.name ? {...t, done: !t.done} : t ) ));
  }

  const taskTableRows = (doneValue) => taskItem.filter(task => task.done === doneValue).map(task => (
    <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
  ));

  return (
    <div className="">
      <TaskBanner userName={userName} taskItem={taskItem} />
      <TaskCreator callback={createNewTask} />
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>Description</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>
          {taskTableRows(false)}
        </tbody>
      </table>

      <div className='bg-secondary text-white text-center p-2'>
        <VisibilityControl 
          description='Completed Tasks'
          isChecked={showCompleted}
          callback={checked => setShowCompleted(checked)}
        />
      </div>

      {showCompleted && (
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Description</th>
              <th>Done</th>
            </tr>
          </thead>
          <tbody>{taskTableRows(true)}</tbody>
        </table>
      )}  
    </div>
  );
}

export default App;
