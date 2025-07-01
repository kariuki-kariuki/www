import { Button, Card, Group, Input, InputWrapper, Textarea } from '@mantine/core'
import { IconBrandLinkedin, IconBrandTwitter, IconBrandWechat, IconBrandWhatsapp } from '@tabler/icons-react'
import React from 'react'

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
        <Card shadow='xl' w={{ base: '100%', md: '50%', lg: '30%' }} className='mx-auto' radius="lg" withBorder>
          <InputWrapper label="Name" mb="lg">
            <Input placeholder="Your Name" size="lg" radius="lg" />
          </InputWrapper>
          <InputWrapper label="Email" mb="md">
            <Input placeholder="Your Email" type='email' size="lg" radius="lg" />
          </InputWrapper>
          <Textarea placeholder="Your Message:" minRows={12} maxRows={12} size="lg" autosize radius="lg" />
          <Group mt="md" justify='space-between' >
            <Group>
              <a href="https://x.com/emkay_init" target="_blank" rel="noopener noreferrer">
                <IconBrandTwitter size={28} color='rgba(0, 0, 0, .5)' />
              </a>
              <a href="https://wa.me/254742075647" target="_blank" rel="noopener noreferrer">
                <IconBrandWhatsapp size={28} color='rgba(0, 0, 0, .5)' />
              </a>
              <IconBrandWechat size={28} color='rgba(0, 0, 0, .5)' />
              <a href="https://www.linkedin.com/in/kariuki_kariuki/" target="_blank" rel="noopener noreferrer">
                <IconBrandLinkedin size={28} color='rgba(0, 0, 0, .5)' />
              </a>
            </Group>
            <Button size="lg" radius="xl" bg="orange.6">Submit</Button>
          </Group>
        </Card>
      </div>
    </div>
  )
}

export default Contact