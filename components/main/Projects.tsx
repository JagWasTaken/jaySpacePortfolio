import React from 'react'
import ProjectCard from './sub/ProjectCard'

const Projects = () => {
    return (
        <div className='flex flex-col items-center justfiy-center py-20'>
            <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
                My Projects
            </h1>
            <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
                <ProjectCard
                    src='/NextWebsite.png'
                    title='Modern Next.js Portfolio'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis nibh dolor, vel tincidunt metus pretium nec. Mauris efficitur faucibus lorem tristique egestas. Nullam porttitor, massa ut faucibus laoreet, libero eros condimentum elit, a tincidunt ipsum magna nec risus. Etiam bibendum dui nec erat rutrum, nec malesuada odio consequat. Donec ac lacinia lectus. Duis vulputate accumsan ligula, sit amet ornare massa dignissim dictum. Aliquam in ultrices magna. Sed mattis mattis mi in condimentum. Proin suscipit mauris at mollis vulputate. Aliquam erat volutpat. Sed fermentum rutrum augue vitae interdum. Nulla suscipit pretium purus, in dignissim mauris sollicitudin et.'
                />
                <ProjectCard
                    src='/CardImage.png'
                    title='Interactive Website Cards'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis nibh dolor, vel tincidunt metus pretium nec. Mauris efficitur faucibus lorem tristique egestas. Nullam porttitor, massa ut faucibus laoreet, libero eros condimentum elit, a tincidunt ipsum magna nec risus. Etiam bibendum dui nec erat rutrum, nec malesuada odio consequat. Donec ac lacinia lectus. Duis vulputate accumsan ligula, sit amet ornare massa dignissim dictum. Aliquam in ultrices magna. Sed mattis mattis mi in condimentum. Proin suscipit mauris at mollis vulputate. Aliquam erat volutpat. Sed fermentum rutrum augue vitae interdum. Nulla suscipit pretium purus, in dignissim mauris sollicitudin et.'
                />
                <ProjectCard
                    src='/SpaceWebsite.png'
                    title='Space Themed Website'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis nibh dolor, vel tincidunt metus pretium nec. Mauris efficitur faucibus lorem tristique egestas. Nullam porttitor, massa ut faucibus laoreet, libero eros condimentum elit, a tincidunt ipsum magna nec risus. Etiam bibendum dui nec erat rutrum, nec malesuada odio consequat. Donec ac lacinia lectus. Duis vulputate accumsan ligula, sit amet ornare massa dignissim dictum. Aliquam in ultrices magna. Sed mattis mattis mi in condimentum. Proin suscipit mauris at mollis vulputate. Aliquam erat volutpat. Sed fermentum rutrum augue vitae interdum. Nulla suscipit pretium purus, in dignissim mauris sollicitudin et.'
                />
            </div>
        </div>
    )
}

export default Projects