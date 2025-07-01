import React from 'react'
import Navbar from './Navbar'
import { Button } from '@mantine/core'
import { IconArrowDownDashed } from '@tabler/icons-react'

const Hero = () => {
  return (
    <div className="bg-cover bg-center bg-[url('/bg.svg')]">
      <div className='h-screen flex flex-col'>
        <Navbar />
        <div className='flex flex-col md:flex-row mt-[20%] md:mt-[10%] p-5 text-black justify-start items-center'>
          <div className='container mx-auto md:flex '>
            <div className='md:w-1/3'>
              <div>
                <h1 className='text-5xl font-extrabold my-5'>Hi, my <br /> name is Martin</h1>
                <p className='text-2xl font-light my-2'>I love creating beautiful products.</p>
              </div>
              <Button bg="orange.6" my="lg" className='font-bold' size="lg" radius="xl">Get in Touch</Button>
            </div>
            <div className='flex justify-center items-center flex-1'>
              <div className='flex flex-col justify-center items-center group hover:cursor-pointer transition-all '>
                <IconArrowDownDashed size={59} className='my-5 group-hover:text-orange-600 group-hover:scale-110 duration-1000'/>
                <p className='text-2xl group-hover:text-orange-600 group-hover:cursor-pointer group-hover:scale-110 duration-1000'>Learn More</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero