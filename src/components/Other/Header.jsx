import React, { useState } from 'react'

const Header = (props) => {
  const [username, setUsername] = useState('')

  // if (!data){
  //   setUsername('admin')
  // }else{
  //   setUsername(data.firstName);
  // }

  const logoutUser = ()=>{
    localStorage.setItem('loggedInUser', '');
    // window.location.reload();
    props.changeUser('')

  }

  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello! <br/> <span className='text-3xl font-semibold'>Welcome To your Dashboard</span></h1>
        <button onClick={logoutUser} className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header