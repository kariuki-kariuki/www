import React from 'react'
import Navbar from './Navbar'
import { Button } from '@mantine/core'

const Hero = () => {
  return (
    <div className="bg-cover bg-center">
      <div className='h-screen flex flex-col'>
        <Navbar />
        <div className='flex mt-[20%] md:mt-[10%] p-5 text-black justify-start items-center prose'>
          <div className='container mx-auto'>
            <div>
              <h1 className='text-5xl font-extrabold my-5'>Hi, my <br /> name is Martin</h1>
              <p className='text-2xl font-light my-2'>I love creating beautiful products.</p>
            </div>
            <Button bg="orange.6" my="lg" className='font-bold' size="lg" radius="xl">Get in Touch</Button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero