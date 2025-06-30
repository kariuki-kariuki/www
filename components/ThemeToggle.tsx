"use client"
import { ThemeIcon, useMantineColorScheme } from '@mantine/core'
import { IconMoon, IconSunHigh } from '@tabler/icons-react'
import React from 'react'

const ThemeToggle = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  return (
    <div>
      <ThemeIcon color='orange.6' size="lg" onClick={() => toggleColorScheme()}>{colorScheme === 'dark' ? <IconSunHigh style={{ width: '70%', height: '70%' }} /> : <IconMoon style={{ width: '70%', height: '70%' }} />}</ThemeIcon>
    </div>
  )
}

export default ThemeToggle