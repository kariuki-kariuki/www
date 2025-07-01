'use client'
import { Card, InputWrapper, Input, Textarea, Group, Button } from '@mantine/core'
import { IconBrandTwitter, IconBrandWhatsapp, IconBrandWechat, IconBrandLinkedin } from '@tabler/icons-react'
import React from 'react'

const ContactForm = () => {
  const [email, setEmail] = React.useState('')
  const [name, setName] = React.useState('')
  const [message, setMessage] = React.useState('')
  return (
    <Card shadow='xl' w={{ base: '100%', md: '50%', lg: '30%' }} className='mx-auto' radius="lg" withBorder>
      <form action="mailto:mkmartinoes@gmail" method='post' encType='text/plain'>
        <InputWrapper label="Name" mb="lg">
          <Input placeholder="Your Name" value={name} type="text" name="name" onChange={(e) => setName(e.target.value)} size="lg" radius="lg" />
        </InputWrapper>
        <InputWrapper label="Email" mb="md">
          <Input placeholder="Your Email" value={email} name="mail" onChange={(e) => setEmail(e.target.value)} type='email' size="lg" radius="lg" />
        </InputWrapper>
        <Textarea placeholder="Your Message:" value={message} name="message" onChange={(e) => setMessage(e.target.value)} minRows={12} maxRows={12} size="lg" autosize radius="lg" />
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
          <Button size="lg" radius="xl" type='submit' bg="orange.6">Submit</Button>
        </Group>
      </form>
    </Card>
  )
}

export default ContactForm