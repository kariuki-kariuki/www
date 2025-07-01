
import React from 'react'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <div className='min-h-screen flex flex-col bg-[#FFFDF6] p-5' id="contact">
      <div className='py-16 container mx-auto'>
        <div className='flex gap-2 justify-start items-center'>
          <i className='w-20 h-1 bg-orange-600'></i>
          <h1 className=' text-2xl lg:text-4xl font-bold text-black '>Say Hello 👋</h1>
        </div>
        <p className='text-2xl text-gray-600'>Do you have any questions or want to work together?</p>
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact