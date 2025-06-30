import { Avatar, Button, Card, CardSection, Group } from '@mantine/core'
import { IconCode, IconEye } from '@tabler/icons-react'
import React from 'react'

interface IProps {
  project: ProjecytProps
}
interface ProjecytProps {
  name: string,
  description: string,
  url: string,
  gitUrl?: string,
  imageUrl: string
}
const ProjectCard = ({ project }: IProps) => {
  return (
    <Card shadow='xl' bg="gray.0" radius="lg" w="100%" withBorder>
      <Avatar size="xl" radius="lg" h="70%" bd={1} w="100%" src={project.imageUrl} alt={project.name} />
      <CardSection px="md" pb="xl">
        <p className='font-bold text-2xl'>{project.name}</p>
        <p className='text-lg'>{project.description}</p>
      </CardSection>
      <CardSection px="md" py='md'>
        <Group justify='space-between' wrap='nowrap'>
          <Button size="lg" variant='subtle' radius="md"><IconCode size={36}/></Button>
          <Button component='a' size="lg" radius="lg" fullWidth href={project.url} target='_blank' color="orange.6" leftSection={<IconEye />}>Preview</Button>
        </Group>
      </CardSection>
    </Card>
  )
}

export default ProjectCard