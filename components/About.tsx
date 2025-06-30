import React from 'react'

const About = () => {
  return (
    <div className='min-h-screen bg-[#FFFDF6]'>
      <div className='py-16 container mx-auto'>
        <div className='flex gap-2 justify-start items-center'>
          <i className='w-20 h-1 bg-orange-600'></i>
          <h1 className=' text-2xl lg:text-4xl font-bold text-black '>About Martin</h1>
        </div>
        <p className='text-2xl text-gray-600'>A little bit about me.</p>
      </div>
    </div>
  )
}

export default About