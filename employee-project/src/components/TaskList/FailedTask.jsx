
import React from 'react'

const FailedTask = () => {
  return (
    <div className='shrink-0 h-full w-[300px] bg-yellow-400 p-5 rounded-xl'>

        <div className='flex items-center justify-between'>
          <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
          <h4 className='text-sm'>20 Feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
        <p className='text-sm mt-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vero illum nobis harum quia corporis!
        </p>
        <div className='mt-2'>
            <button className='w-full'>Failed Task</button>
        </div>
      
    </div>
  )
}

export default FailedTask
