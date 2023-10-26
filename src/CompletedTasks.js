import React from "react";
import './CompletedTasks.css'

function Completed_Tasks({task,index})
{
    return (
        <>
        <br/><br/>
        <li className='tasks1' >
        <span className='idx1'>{index+1}</span>&nbsp;&nbsp;&nbsp;&nbsp;
        <span className='task1'>{task}</span>
      </li>
        </>
    )
}
export default Completed_Tasks;