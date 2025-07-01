import React from 'react'
import { Carousel, CarouselSlide } from '@mantine/carousel'
import ProjectCard from './ProjectCard'

const projects = [
  {
    name: 'Nexcom',
    url: 'https://nexcom.site/',
    description: 'High perfomant Super App',
    github: 'https://github.com/kariuki-kariuki/nexcom-web',
    imageUrl: '/projects/nexcom.png',
    techStack: ["React", "Redis", "HTML", "NestJs", "Mantine"]
  },
  {
    name: 'Scode Social',
    url: 'https://social.scode.co.ke/',
    description: 'NGO Website Platform',
    github: 'https://github.com/kariuki-kariuki/',
    imageUrl: '/projects/social.png',
    techStack: ["Nextjs", "Tailwind", "NestJs", "Mantine"]

  },
  {
    name: 'Scode Enterprise',
    url: 'https://enterprise.scode.co.ke/',
    description: 'NGO Ecomerce Platform',
    github: 'https://github.com/kariuki-kariuki/',
    imageUrl: '/projects/enterprise.png'
  },
  {
    name: 'Nexcom Dashboard',
    url: 'https://nexcom.site/dashboard',
    description: 'High perfomant Super Dashboard',
    github: 'https://github.com/kariuki-kariuki/nexcom-web',
    imageUrl: '/projects/dashboard.png'
  },
  {
    name: 'Portfolio',
    url: 'https://kariuki-portfolio.vercel.app/',
    description: 'My Beautiful Portfolio',
    github: 'https://github.com/kariuki-kariuki/www',
    imageUrl: '/projects/portfolio.png'
  },

]

const Projects = () => {
  const slides = projects.map((project) => (
    <CarouselSlide key={project.name} my="xl">
      <ProjectCard project={project} />
    </CarouselSlide>
  ))
  return (
    <div className='min-h-screen flex flex-col p-5' id="portfolio">
      <div className='py-24 container mx-auto'>
        <div className='flex gap-2 justify-start items-center'>
          <i className='w-20 h-1 bg-orange-600'></i>
          <h1 className='text-2xl lg:text-4xl font-bold text-black'>Portfolio</h1>
        </div>
        <p className='text-2xl text-gray-600'>Some Projects I have worked on</p>
      </div>


      <div>
        <Carousel slideSize={{ base: '80%', sm: '33.333%', lg: '20%' }} emblaOptions={{ loop: true, align: 'start' }} slideGap="xl" withControls>
          {slides}
        </Carousel>
      </div>

    </div>
  )
}

export default Projects