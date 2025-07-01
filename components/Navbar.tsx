import { Avatar, Button, Group } from '@mantine/core'
import { IconBrandGithub, IconMenuDeep } from '@tabler/icons-react'
import React from 'react'
// import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  return (
    <div className='h-[100px] flex flex-col justify-center shadow-lg  sticky' style={{ backgroundColor: 'rgba(255, 255, 255, .7)' }}>
      <div className='flex justify-between container mx-auto'>
        <Avatar src="/logo.png" alt="Vercel Logo" name='Martin Kariuki' />
        <Group>
          <IconMenuDeep />
          <Button component="a" variant='transparent' href='https://github.com/kariuki-kariuki' target='_blank' color="orange.6">
            <IconBrandGithub />
          </Button>
          {/* <ThemeToggle /> */}
        </Group>
      </div>
    </div>
  )
}

export default Navbar