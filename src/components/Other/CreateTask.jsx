import React from 'react'
import { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext)

  const [title, setTaskTitle] = useState('')
  const [description, setTaskDescription] = useState('')
  const [date, setTaskdate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')

  const [newtask, setNewTask] = useState({})


  const submitHandler = (e)=>{
    e.preventDefault()
    
    setNewTask({title,description,date,category,assignTo, active: false,new:true, failed: false, completed: false} )

    const data= userData

    
    userData.forEach(function(e){
      if(assignTo==e.firstName){
        e.tasks.push(newtask);
        e.taskStats.new= e.taskStats.new+1;
      }
    })
    setUserData(data);

    setTaskTitle('')
    setTaskDescription('')
    setTaskdate('')
    setAssignTo('')
    setCategory('')

  }

  return (
      <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
        <form onSubmit={(e)=>{
          submitHandler(e);
        }} 
        className='flex flex-wrap w-full items-start justify-between'
        >
          <div className='w-1/2'>
              <div>
              <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
              <input 
              value={title}
              onChange={(e)=>{
                setTaskTitle(e.target.value);
              }}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='text' placeholder='Make a task'></input>
            </div>
              <div>
              <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
              <input 
              value={date}
              onChange={(e)=>{
                setTaskdate(e.target.value);
              }}
               className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='date'></input>
            </div>
            <div>
              <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
              <input 
              value={assignTo}
              onChange={(e)=>{
                setAssignTo(e.target.value);
              }}
               className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='text' placeholder='Employee Name'></input>
            </div>
            <div>
              <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
              <input
              value={category}
              onChange={(e)=>{
                setCategory(e.target.value);
              }}
               className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='text' placeholder='design,dev etc.'></input>
            </div>
          </div>
          
          <div className='w-2/5 flex flex-col items-start'>
            <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
            <textarea 
            value={description}
              onChange={(e)=>{
                setTaskDescription(e.target.value);
              }} 
              className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 ' name='' id='' cols={30} rows={10}></textarea>
            <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
          </div>
        </form>
      </div>
  )
}

export default CreateTask