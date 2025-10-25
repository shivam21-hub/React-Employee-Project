
import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='h-[55%] w-full overflow-x-auto flex items-center justify-start gap-5 flex-nowrap py-5 mt-10'>

      <div className='shrink-0 h-full w-[300px] bg-red-400 p-5 rounded-xl'>

        <div className='flex items-center justify-between'>
          <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
          <h4 className='text-sm'>20 Feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
        <p className='text-sm mt-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vero illum nobis harum quia corporis!
        </p>
      </div>

      <div className='shrink-0 h-full w-[300px] bg-green-400 p-5 rounded-xl'>

        <div className='flex items-center justify-between'>
          <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
          <h4 className='text-sm'>20 Feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
        <p className='text-sm mt-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vero illum nobis harum quia corporis!
        </p>
      </div>

      <div className='shrink-0 h-full w-[300px] bg-blue-400 p-5 rounded-xl'>

        <div className='flex items-center justify-between'>
          <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
          <h4 className='text-sm'>20 Feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
        <p className='text-sm mt-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vero illum nobis harum quia corporis!
        </p>
      </div>

      <div className='shrink-0 h-full w-[300px] bg-yellow-400 p-5 rounded-xl'>

        <div className='flex items-center justify-between'>
          <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
          <h4 className='text-sm'>20 Feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
        <p className='text-sm mt-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vero illum nobis harum quia corporis!
        </p>
      </div>
    
      
    </div>
  )
}

export default TaskList
