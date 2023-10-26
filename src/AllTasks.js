import React, { useState } from 'react';
import './AllTasks.css';

 let editedValue;


function Tasks({ task ,index, deleteTask,onClickUp,onClickDown,valueEdit,CompletedTask}) {
  const [dots,showDots] = useState(false);
  const [isEditing,setIsEditing] = useState(false);
  const [edTask,setEditTast] = useState(task);
  
  editedValue=edTask;

  function toggle()
  {
    showDots(!dots);  
  }
  const handleDelete=()=>
  {
    deleteTask(index);
    showDots(!dots);
  }
  const handleIsEditing=()=>
  {
    setIsEditing(true);   
    showDots(!dots);
  }
  const handleEditedTask=(e)=>
  {
    setEditTast(e.target.value);
  }
  
  const handleSave=()=>
  {
    setIsEditing(false);
    valueEdit(index);
  }
  const Completed=()=>
  {
    CompletedTask(index);
    deleteTask(index);
    showDots(!dots);
  }
  return (
    <li className='tasks' >
      <span className={dots?'none':'idx'}>{index+1}</span>&nbsp;&nbsp;&nbsp;&nbsp;
      {
        isEditing?<input type='text' className='edited' value={edTask} onChange={handleEditedTask}/>
        :<span className='task'>{task}</span>
      }
      {
        isEditing?<button className='save' onClick={handleSave}>Save</button>:''
      }
      <button className='up' onClick={()=>{onClickUp(index)}}><img src=' https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-512.png'/></button>
      <button className='down' onClick={()=>{onClickDown(index)}}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTarO3r5nAcHSqSeJAYf3Qcuvf1THq3UldiEg&usqp=CAU'/></button>
      <button className='edit' onClick={toggle}><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEX///8AAAD8/Pz5+fkTExPn5+fk5OSUlJSfn590dHSampo5OTnCwsJmZmYXFxcNDQ3v7++4uLh7e3tXV1eurq4bGxsnJyfZ2dnR0dG/v7+rq6vKyspubm43NzdhYWFRUVFFRUUwMDAy2Y5JAAADd0lEQVR4nO3di3aiMBAGYEYEUWsFvNSq1fb9X3IP69ZqyyUEd2fnz/89wcxBkzAZkigiIiIiIiIiIiIia+L8sM9m2f6Qx9qh/A15cdzKp+2xyLUDerCkfJZ7yzLVDuqB4lLqTGF+rK+1+VUK7dAeo/4BXpTawT3CqSVBkZN2eMOdWxMUOY+0Ixzo2JGgyFE7xGGyzgRFMu0gh3hxSFDkRTvMAd6dMnzXDtPf2ilBkbV2oN7mjhnOtQP19eSYoMiTdqieFs4ZLrRD9TNyTlDE5rTv/iMVOWgH62XSI8OJdrBeVj0yXGkH62XbndjVVjtYL9/rFm2etYP1MVr2yHBpcTDFzxD/VxrASIM/W+DP+H1WbTZfLvqsvLVj9QT/9hTAGzB+FcO5EmV4gwa+mhhARRi/qh/Azkw06lqdrky+N90adeyQmk8wCmCXO4qKcUN+S8MT4b2GbpMSqWso+ZljmWgH9WBxsfi4ZvexKGC6hW7F6W6dTbL1LoVMj4iIiIiIiIiI6N9CLrOl6+l8M16ON/PpGun70T+S2X2b23iGVfJOpjXbFlOgB9nU4Wazm+2npLmt5g3iMe4a86vstMMbrvlD7otX7QCHan+CFZufy1wlnQmK2J42XHr33rSDHMKtEdrwpJE6JShid86oW8nUmWoH6stlmLmwOtjMnDOcaYfqaeOc4UY7VD+u40zF5ljj2uVdsXnmgOtIWrE5mrp+i1Cx+T2C+0Bjdahp6iqtM9YO1kfc6ytZk0VG+GcYwP8QfyzFnw/x1zT461L8d4sA3g/x3/Hx6zTOY43ZRxhAvdRtXWNzPfMJf9/CYe/J/A4i/P5hAHvA7fv4xv+DV03LN9PTxD34fpoIvyfqtwS7r+3KZNmQiIiIiIiIiIjo/xKnu302yfagZ+6hn5uIfvYl/Pml8GfQtp0jbLeT5kvHWdAAh13Dn+cNfyY7/Ln6+HcjwN9vgX9HCfw9M/h3BcHf94R/Zxf+vWv4d+fh33+If4cl/D2k+HfJ4meI/ysNYKTBny3wZ/w+qzabh7b1WXmbHEoDeHsK4A0Yv4oRQCUKv5oYQEUYv6ofwM5MFJ07EjwbnexvtM/7J+3wHiGA23KbP+c2PBHea+o2QeoaSsrvNY1xifYdaV4cv8oa22MB0y10K84P+2yW7Q850s+TiIiIiIiIiIgoFL8ANmIovQYmrMoAAAAASUVORK5CYII='/></button>
      <ul className={dots?'dots':'none'}>
        <button className='box' onClick={Completed}><img src='https://static.thenounproject.com/png/404331-200.png'/></button>
        <li><button onClick={handleIsEditing}><img src="data:image/png;base64,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"
        /></button></li>
        <li><button><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAMAAABmmnOVAAAAYFBMVEX///8AAAD5+fkuLi40NDTq6uqXl5ednZ2jo6Otra3v7+/R0dGysrK4uLgVFRX09PRycnJjY2M7Ozvi4uLKysqIiIgODg5dXV16enpoaGhPT09CQkIiIiIbGxuCgoLc3Nx27RwAAAACqUlEQVR4nO2baWODIAyGC1717Lxn7bb//y+3bitGYeVquivvR5DwFCVVkux2JNIfUFTEWhURLkPMjBRjMtRmDIzVeAylKQNjJRrEbA4xo0GYMzBGEATxXyGGVKnhrhAVV/Xz6r4QB1X/gSBQICKlMgDRqi5oAUSmtmGMUI5NqBTYgY4XNKPh3+vDdsvfVg8mDI+4DIw96hkyvRVfZVqIFB8i1UIk+BDJ71iJH/FM7J6xGZ71DD/DT7x5zDlA02z+QcLRZIxAIqnVlknZfrOx/v0tqb8NQ3+2VVkbm+xcy3Vd3N9kN6wQDu4Gpx2lo7HlXOjoD3EUxqxOkbJGjAu8nRwPhLHG4A9UKApxIEKbw0WCIAhLCJ7v97nUrm7FgsjfN3CTm7RiQeSXrg62dpdWiQIDggtHNoMuLo6cG2kAAoRYiNVSdEvrdikwIPbLdHtd6z0gwEdlQhAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEcdYSo2OFrhUNIhJdFQi3gmSz7UQoB+z9patXtkrZ6zihhvGjp1718M9w7ihdjhR0KevTSU6iK8fTqVaEX9HCTwd1KqSy9S/HwAjin0Mon3gbHRwhsqWc5Mk7r6Z9EsZmm9QFPopx6+ini0CgcLS6t9My0Du3p19s2SXVwFIrzyeTA1N2pVm580hJ8PfIgfRrgvh+T0UHLVkuKsxPrTwoOpBZb5aTCgTvBxu2b2zGKgdox+5u7LaFZ7XTYnTrMj77ArXVUpw1xeoSm68UT1sL1guBkNNvkMMvKQv1dm0U2rhsoZfbQry4MFhVZurlnM1Y6G2bynmTb9ydj7ycbnTUT6DX0bOymaeBfpLrClL/vPUsHvQTfa0hdtqasrre0Wc0vfd7GRCP8iLRl7VDJUUeUf0A6TfrFcaeNNY4GA4UAAAAAElFTkSuQmCC'
        onClick={handleDelete}/></button></li>
      </ul>
    </li>
  );
}

export default Tasks;
export {editedValue};