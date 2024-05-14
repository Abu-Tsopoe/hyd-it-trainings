import React from 'react'
import adminImg from "./../images/admin.jpg"
const Welcome = () => {
  return (
    <div className='container text-center py-3'>
        <h1 className='mb-3'>Welcome to Admin Dashboard</h1>
        <img src={adminImg} alt='' className='w-75'/>
    </div>
  )
}

export default Welcome