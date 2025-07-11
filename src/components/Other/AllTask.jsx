import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext)


  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded h-60 '>
        <div className='text-lg font-medium bg-emerald-500 mb-2 py-2 px-4 flex justify-between rounded '>
            <h2 className='w-1/5 '>Name</h2>
            <h3 className='w-1/5 '>New</h3>
            <h5 className='w-1/5 '>Active</h5>
            <h5 className='w-1/5 '>Completed</h5>
            <h5 className='w-1/5 '>Failed</h5>
        </div>

        <div id='createlist' className='h-[80%] overflow-auto'>
            {userData.map(function(e,idx){

            return <div key={idx} className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded '>
            <h2 className='text-lg font-medium w-1/5'>{e.firstName}</h2>
            <h3 className='text-lg font-medium w-1/5 !text-yellow-400'>{e.taskStats.new}</h3>
            <h5 className='text-lg font-medium w-1/5 !text-blue-600'>{e.taskStats.active}</h5>
            <h5 className='text-lg font-medium w-1/5 !text-green-600'>{e.taskStats.completed}</h5>
            <h5 className='text-lg font-medium w-1/5 !text-red-600'>{e.taskStats.failed}</h5>
        </div>
        })}
        </div>

    </div>
  )
}

export default AllTask