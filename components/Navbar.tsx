import { Avatar, Group } from '@mantine/core'
import { IconMenuDeep } from '@tabler/icons-react'
import React from 'react'

const Navbar = () => {
  return (
    <div className='h-[100px] flex flex-col justify-center bg-[#FFFDF6] sticky border-b border-gray-300'>
      <div className='flex justify-between container mx-auto'>
        <Avatar src="/logo.png" alt="Vercel Logo" name='Martin Kariuki' />
        <Group>
          <IconMenuDeep />
        </Group>
      </div>
    </div>
  )
}

export default Navbar