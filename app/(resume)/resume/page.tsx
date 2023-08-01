
import { getJobData, getProjectData } from '@/app/lib/sanity';
import { Job, Project } from '@/app/lib/interface';

import ResumeSection from './ResumeSection'
import ResumeHeader from "./ResumeHeader";
import ResumeFooter from './ResumeFooter';
import ResumeIntro from './ResumeIntro';
import SectionExperience from './SectionExperience';
import SectionProjects from './SectionProjects';

export default async function ResumePage() {
    const jobData = await getJobData() as Job[]
    const projectData = await getProjectData() as Project[]

    return (
        <div className='md:max-w-5xl mx-auto relative w-full py-2 md:py-8 px-4 md:px-8 text-white overflow-x-hidden'>
            <ResumeHeader />

            <ResumeSection sectionId="section-about" className="about relative grid md:grid-cols-2 place-items-center py-4 px-2 md:px-16 min-h-[24rem]">
                <ResumeIntro />
            </ResumeSection>

            <SectionExperience jobData={jobData} />
            <SectionProjects projectData={projectData} />

            {/* <ResumeSection sectionId="section-contact">
                <h2 className='mb-8 text-2xl font-sans font-semibold'>Contact</h2>
            </ResumeSection> */}

            <ResumeFooter />
        </div >
    )
}