import FooterLink from './FooterLink';
import ResumeSection from './ResumeSection';

import { FaGithub, FaDev } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

export default function ResumeFooter() {
    return   <ResumeSection sectionId="section-contact" className='md:min-h-[auto]'>
        <footer className='footer flex flex-col md:flex-row gap-4 justify-between items-start'>
            <div className='flex md:flex-col gap-4 justify-between'>
                <p className='shrink-0'>Roman Filenko &copy; <span>{new Date().getFullYear()}</span></p>
                <ul className="social flex gap-4 md:gap-2">
                    <li>
                        <a href="https://github.com/rfilenko"><FaGithub size={20} /></a>
                    </li>
                    <li>
                        <a href="mailto:roman.filenko@gmail.com"><BiLogoGmail size={20} /></a>
                    </li>
                </ul>
            </div>

            <div className='max-w-md'>
                <h3 className='font-sans font-bold text-base leading-8'><span className='inline-block text-teal-400'><FaDev /></span> stack used:</h3>
                <p>Loosely, but meticulously coded by yours truly. Built with <FooterLink href="https://code.visualstudio.com/" textLink='Visual Studio Code' />, <FooterLink href="https://nextjs.org/" textLink='Next.js' /> and <FooterLink href="https://tailwindcss.com/" textLink='Tailwind CSS' />, data pulled from <FooterLink href="https://www.sanity.io/" textLink='Sanity.io' />, deployed with <FooterLink href="https://vercel.com/" textLink='Vercel' />.</p>
            </div>
        </footer>
    </ResumeSection>
}
