'use client'
import Image from 'next/image'

import { urlFor } from '@/app/lib/sanityImageUrl';
import { Project } from '@/app/lib/interface';
import { motion } from 'framer-motion';

import ResumeSection from './ResumeSection'
import Pill from './Pill';
import { FaGithub } from 'react-icons/fa6';

export default function SectionExperience({ projectData }: { projectData: Project[] }) {
    return <>
        <ResumeSection sectionId="section-projects" className='pt-6'>
            <h2 className='mb-8 text-2xl font-sans font-semibold'>Projects</h2>

            <div className='grid sm:grid-cols-3 sm:gap-8 md:gap-12'>
                {projectData.map((project) => {
                    return <motion.article className='project-item mb-8' key={project._id} whileHover={{
                        position: 'relative',
                        zIndex: 100,
                        scale: [1, 1.05, 1.02, 1],
                        rotate: [0, 0.5, -0.5, 0],
                        transition: {
                            duration: .35
                        }
                    }}>
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-4 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
                            </div>
                            <div className="z-10 sm:col-span-6 relative">
                                <h3 className="font-medium leading-snug text-slate-200 mb-2 min-h-20">
                                    <div className='flex justify-between items-center'>
                                        <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" href={project.link} target="_blank" rel="noreferrer" aria-label={`${project.name}`}>
                                            {/* <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span> */}

                                            <span className="inline-block">{project.name}
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-focus-visible/link:-translate-y-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
                                            </span>
                                        </a>
                                        {project.githubLink && <a className="block text-slate-200 text-sm group/githublink" href={project.githubLink} target="_blank" rel="noreferrer">
                                            <FaGithub size={16} />
                                        </a>}
                                    </div>


                                    <div className="text-slate-500 min-h-[50px] mt-2" aria-hidden="true">{project.description}</div>
                                </h3>


                                <div className='relative w-full h-[12.5rem] overflow-hidden rounded-lg '>
                                    <Image
                                        src={urlFor(project.image).width(350).url()}
                                        alt="Image"
                                        className="absolute top-0 left-0 object-cover object-top w-full h-full"
                                        width={350}
                                        height={300}
                                    />
                                </div>

                                <div className='flex gap-2 mt-8 relative'>
                                    <h3 className='text-xs text-teal-400 font-semibold whitespace-nowrap shrink-0 absolute -top-4'>Stack: </h3>

                                    <ul className="flex flex-wrap" aria-label="Technologies used">
                                        {project.tech.map(item => {
                                            return (<li key={item} className="mr-1.5 mt-2"><Pill name={item} /></li>)
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.article>
                })}
            </div>
        </ResumeSection>
    </>
}
