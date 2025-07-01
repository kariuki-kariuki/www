import siteMetaData from '@/common/sitemetadata'
import { Avatar, Card } from '@mantine/core'
import React from 'react'

const About = () => {
  return (
    <div className='min-h-screen bg-[#FFFDF6] p-5'>
      <div className='py-16 container mx-auto'>
        <div className='flex gap-2 justify-start items-center'>
          <i className='w-20 h-1 bg-orange-600'></i>
          <h1 className=' text-2xl lg:text-4xl font-bold text-black '>About Martin</h1>
        </div>
        <p className='text-2xl text-gray-600'>A little bit about me.</p>
      </div>
      <section className='container mx-auto lg:flex justify-center items-center gap-5'>
        <div className='flex justify-center'>
          <Card shadow='xl' radius="xl" withBorder>
            <Avatar src="/emkay.png" radius="lg" alt="Vercel Logo" w={{ base: '100%', sm: 400 }} h="auto" name='Martin Kariuki' />
          </Card>
        </div>
        <div className='mt-5 lg:w-1/2 '>
          <p className='text-2xl text-gray-700'>
            {siteMetaData.description}
          </p>
          <div className='flex gap-2 justify-start items-center text-xl m-5'>
            <i className='h-[1px] flex-1 bg-orange-600'></i>
            <p>mkmartinoes@gmail.com</p>
            <i className='h-[1px] flex-1 bg-orange-600'></i>
          </div>

        </div>
      </section >
    </div >
  )
}

export default About