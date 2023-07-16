import Image from 'next/image'
import Section from './Section'
import Header from "./Header";
import Pill from './Pill';
import { getJobData } from '@/app/lib/sanity';
import { Job } from '@/app/lib/interface';
import { PortableText } from '@portabletext/react';

export default async function ResumePage() {
    const data = await getJobData() as Job[]

    const PortableTextComponent = {
        types: {
            block: ({ value }: { value: any }) => {
                return <div className="desctiption-value">{value.children[0].text}</div>
            },
        },
    }

    return (
        <div className='max-w-5xl mx-auto relative w-full py-8 text-white'>
            <Header />

            <Section sectionId="section-about" className="hero grid grid-cols-2 place-items-center py-4 px-16">
                <div className='hero-content tracking-tight'>
                    <h1 className='font-sans font-extrabold text-5xl leading-12'>Roman Filenko</h1>
                    <h2 className='font-sans text-3xl leading-10 font-bold text-teal-400'>Frontend Developer<span className='text-white'>.</span></h2>
                    <p className='text-gray-200'>I code and build stuff on internet, create digital experiences for the web.</p>
                </div>

                <div className='hero-image'>
                    <Image src="/handsome.jpg" width={300} height={350} alt="Handsome me" />
                </div>
            </Section>

            <Section sectionId="section-experience">
                <h2 className='mb-8 text-2xl font-sans font-semibold'>Experience</h2>

                <div className='grid sm:grid-cols-2 sm:gap-8 md:gap-12'>
                    {data.map((job) => {
                        return <article className='job-item' key={job._id}>
                            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
                                </div>
                                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label={job.date}>{job.date}</header>
                                <div className="z-10 sm:col-span-6">
                                    <h3 className="font-medium leading-snug text-slate-200">
                                        <div>
                                            <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href={job.link} target="_blank" rel="noreferrer" aria-label={`${job.position} at ${job.company}`}>
                                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                                <span>
                                                    <span className="inline-block">{job.company}
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
                                                    </span>
                                                </span>
                                            </a>
                                        </div>
                                        <div>
                                            <div className="text-slate-500" aria-hidden="true">{job.position}</div>
                                        </div>
                                    </h3>
                                    <div className="mt-2 text-sm leading-normal">
                                        <PortableText
                                            value={job.content}
                                            components={PortableTextComponent}
                                        />
                                    </div>

                                    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                                        {job.tech.map(item => {
                                            return (<li key={item} className="mr-1.5 mt-2"><Pill name={item} /></li>)
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </article>
                    })}
                </div>
            </Section>

            <Section sectionId="section-projects">
                <h2 className='mb-8 text-2xl font-sans font-semibold'>Projects</h2>
            </Section>

            <Section sectionId="section-contact">
                <h2 className='mb-8 text-2xl font-sans font-semibold'>Contact</h2>
            </Section>
        </div>
    )
}