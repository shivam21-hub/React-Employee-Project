
import React from 'react'
import Header from '../others/Header'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-full p-10'>
      <Header/>

      <div>
        <form>
            <h3>Task Title</h3>
            <input type="text" placeholder='Make a UI design'/>
            <h3>Description</h3>
            <textarea name="" id=""></textarea>
            <h3>Date</h3>
            <input type="date" />
            <h3>Assign To</h3>
            <input type="text" placeholder='Employee name'/>
            <input type="text" placeholder='Design, Dev, etc'/>
        </form>
      </div>
    </div>
  )
}

export default AdminDashboard
