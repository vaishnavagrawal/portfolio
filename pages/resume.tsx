import Link from 'next/link'
import React from 'react'

import { projects, workExperience } from 'constants/resume'
import { NotionPageHeader } from '@/components/NotionPageHeader'

function resume() {
  return (
    <div>
      <div
        style={{
          //   position: 'fixed',
          width: 'auto',
          height: 'var(--notion-header-height)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: ' center'
        }}
      >
        <div
          className='text-3xl font-bold flex'
          style={{
            marginLeft: '20px',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Link href='/'>
            <span>

            VKA
            <span className='rounded-full h-2 w-2 bg-black inline-block ml-1'></span>
            </span>
          </Link>
        </div>
        <div className='md:mr-28 mr-10'>
          <Link href='/articles-1e67b8adbeb94f71a92ce8fd3fc803e1'>
            <span className='p-3 hover:bg-[#a6a5a2b2]'>Articles</span>
          </Link>
        </div>
      </div>
      <NotionPageHeader/>

      <div className='md:container mx-auto p-10'>
        <h1>Resume</h1>
        <div>
          <hr className='border-2 border-black' />
        </div>
        <br />
        <br />

        {/* Work Experience */}
        <div className='md:flex justify-between items-start'>
          <h2 className=''>Work Experience</h2>
          <div className='w-[70%]'>
            {workExperience.map((work) => (
              <div className='flex flex-col' key={work.company}>
                <h3
                  className='mb-2 pb-2'
                  style={{
                    borderBottom: '2px solid black'
                  }}
                >
                  {work.company}
                </h3>
                {/* <hr className='w-full' /> */}
                <div>
                  <ul>
                    {work.jobs.map((job, key) => (
                      <li key={key}>{job}</li>
                    ))}
                  </ul>
                </div>
                <br />
              </div>
            ))}
          </div>
        </div>
        <br />
        <br />
        {/* Projects */}
        <div className='md:flex justify-between items-start'>
          <h2 className=''>Projects</h2>
          <div className='w-[70%]'>
            {projects.map((project) => (
              <div className='flex flex-col' key={project.title}>
                <h3
                  className='mb-2 pb-2'
                  style={{
                    borderBottom: '2px solid black'
                  }}
                >
                  {project.title}
                </h3>
                <div>
                  <ul>
                    {project.features.map((feat, key) => (
                      <li key={key}>{feat}</li>
                    ))}
                  </ul>
                </div>
                <br />
              </div>
            ))}
          </div>
        </div>
        <br />
        {/* Education */}
        <div className='flex justify-between items-start'>
          <h3 className=''>Education</h3>
          <div className='w-[70%]'>
            <div className='flex flex-col'>
              <h3 className='mb-2'>IIT Kharagpur</h3>
              <div>
                <p>
                  <b>B.Tech. in Metallurgical & Material Engineering</b>
                  <br />
                  􏰀 July 2018 – July 22 􏰁 West Bengal
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='text-bold mx-auto w-full'>
          <p>
            ---------------------------------------x---------------------------------------
          </p>
        </div> */}
        <br />
        <br />

        <div>
          <hr className='border-2 border-black' />
        </div>
        <br />
        <br />
      </div>
    </div>
  )
}

export default resume
