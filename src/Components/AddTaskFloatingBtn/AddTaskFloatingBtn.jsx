import { useState } from 'react';
import './AddTaskFloatingBtn.css';
import { Link, useNavigate } from 'react-router-dom';
import { Fade } from 'react-reveal';
let AddTaskFloatingBtn =()=>{
  let navigate = useNavigate();
  return <Link to ='/'><div className='add-task-btn-wrapper d-flex justify-content-between align-items-center p-2'>
  <Fade right><p className='addTaskText'>Add Task</p></Fade>
<button className='addTaskBtn'></button>
  </div>
  </Link>
}

export default AddTaskFloatingBtn;