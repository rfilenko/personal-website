import { getJobData, getProjectData } from "@/app/lib/sanity";
import { Job, Project } from "@/app/lib/interface";

const position = `</FrontendDeveloper>`;
export const metadata = {
	title: `Roman Filenko-${position}`,
	description:
		"Explore my personal portfolio showcasing my professional experience in web development,"
};

import ResumeSection from "@/app/components/resume/ResumeSection";
import ResumeHeader from "@/app/components/resume/ResumeHeader";
import ResumeFooter from "@/app/components/resume/ResumeFooter";
import ResumeIntro from "@/app/components/resume/ResumeIntro";
import SectionExperience from "@/app/components/resume/SectionExperience";
import SectionProjects from "@/app/components/resume/SectionProjects";
import SectionContact from "./components/resume/SectionContact";

export default async function Home() {
	const jobData = (await getJobData()) as Job[];
	const projectData = (await getProjectData()) as Project[];

	return (
		<div className="bg-slate-900 h-full selection:bg-teal-600 selection:text-gray-100">
			<div
				className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
				style={{
					background:
						"radial-gradient(600px at 1008px 241px, rgba(29, 78, 216, 0.15), transparent 80%)"
				}}
			></div>
			<div className="md:max-w-5xl mx-auto relative h-full w-full py-2 md:py-8 px-4 md:px-8 text-white overflow-x-hidden">
				<ResumeHeader />

				<main>
					<ResumeSection
						sectionId="section-about"
						className="about relative grid md:grid-cols-2 place-items-center py-4 px-2 md:px-16 min-h-[24rem]"
					>
						<ResumeIntro />
					</ResumeSection>

					<SectionExperience jobData={jobData} />
					<SectionProjects projectData={projectData} />

					<ResumeSection sectionId="section-contact">
						<SectionContact />
					</ResumeSection>
				</main>

				<ResumeFooter />
			</div>
		</div>
	);
}
