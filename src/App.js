
import './App.css';
import './AllTasks.css';
import React, { useState } from 'react';
import Tasks, { editedValue } from './AllTasks';
import Completed_Tasks from './CompletedTasks';



function App() {
  const [tasklist, setTasklist] = useState([]);
  const [tasklist1, setTasklist1] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInput = (e) => {  
    setInputValue(e.target.value);
  };

  const addTask = () => {
    if (inputValue.trim() !== '') {
      setTasklist([...tasklist, inputValue]);
      setInputValue('');
    }
  };

  const deleteTask=(index)=>
  {
    const updateTask=[...tasklist];
    updateTask.splice(index,1);
    setTasklist(updateTask);  
  }
  const CompletedTask=(index)=>
  {
    setTasklist1([...tasklist1,tasklist[index]]);
  }

  const onClickUp=(index)=>
  {
    if(index>0)
    {
      const updateTask=[...tasklist];
      const temp=updateTask[index];
      updateTask[index]=updateTask[index-1];
      updateTask[index-1]=temp;
      setTasklist(updateTask);
    }
  }
  const onClickDown=(index)=>
  {
    if(index<tasklist.length-1)
    {
      const updateTask=[...tasklist];
      const temp=updateTask[index];
      updateTask[index]=updateTask[index+1];
      updateTask[index+1]=temp;
      setTasklist(updateTask);
    }
  }

  const valueEdit=(index)=>
  {
    const updateTask=[...tasklist];
    updateTask[index]=editedValue;
    setTasklist(updateTask);
  }

  return (
    <>
      <div className="App">
        <p className="logo">Your To-do App</p>
        <input
          type="text"
          className="input"
          value={inputValue}
          onChange={handleInput}
        />
        <a href="#list" className="add" onClick={addTask}>
          Add
        </a>
      </div>
      <h1>Lists</h1>
      <div className="lists" id="list">
        <aside className="Tasks">
          <div className="box1"></div>
          <p className="head1">Your Tasks</p>
          <ul className="list1">
            {tasklist.map((task, index) => (
              <Tasks key={index} task={task} index={index} deleteTask={deleteTask} onClickUp={onClickUp} onClickDown={onClickDown} valueEdit={valueEdit} CompletedTask={CompletedTask}/>
            ))}
          </ul>
        </aside>
        <aside className="Completed_Tasks">
          <div className="box2"></div>
          <p className="head2">Completed Tasks</p>
          <ul className="list2">
          {tasklist1.map((task, index) => (
              <Completed_Tasks task={task} index={index}/>
            ))}
          </ul>
        </aside>
      </div>
    </>
  );
}

export default App;
