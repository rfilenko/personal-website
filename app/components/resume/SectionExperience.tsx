"use client";

import { Job } from "@/app/lib/interface";
import { motion } from "framer-motion";

import JobCard from "./JobCard";
import ResumeSection from "./ResumeSection";

export default function SectionExperience({ jobData }: { jobData: Job[] }) {
	const wrap = {
		hidden: {
			scale: 0.8,
			opacity: 0,
			transition: { when: "beforeChildren", type: "easeIn" }
		},
		show: {
			scale: 1,
			opacity: 1,
			transition: {
				staggerChildren: 0.25
			}
		}
	};
	const jobVariant = {
		hidden: {
			opacity: 0
		},
		show: {
			opacity: 1
		}
	};

	return (
		<>
			<ResumeSection sectionId="section-experience" className='pt-6'>
				<motion.div
					key="experience"
					initial="hidden"
					animate="show"
					variants={wrap}
				>
					<h2 className="mb-2 md:mb-8 text-2xl font-sans font-semibold">
						Experience
					</h2>

					<div className="grid sm:grid-cols-2 sm:gap-8 md:gap-12">
						{jobData.map((job) => (
							<JobCard job={job} key={job.company} jobVariant={jobVariant} />
						))}
					</div>
				</motion.div>
			</ResumeSection>
		</>
	);
}
