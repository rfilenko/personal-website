'use client'
import { motion } from 'framer-motion';
const navItems = ['about', 'experience', 'projects', 'contact']

export default function ResumeHeader() {
    const ul = {
        hidden: {
            x: '-100vw',
            opacity: 0
        },
        visible: {
            x: '0',
            opacity: 1,
            transition: {
                delay: 0.25,
                type: "spring", stiffness: 120
            },
        },
    }

    const handleScroll = (event: React.SyntheticEvent) => {
        event.preventDefault()
        const value = (event.target as HTMLElement).textContent
        const section = document.getElementById(`section-${value}`) || document.body

        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth',
        });
    };

    return (
        <header className='flex text-white w-full justify-center py-4'>
            <nav>
                <motion.ul key="ul" initial="hidden" animate="visible" variants={ul} transition={{ duration: 0.5 }} className='flex flex-wrap justify-center gap-4'>
                    {navItems.map((item, index) => {
                        return <li key={item}>
                            <span className="font-semibold text-xs text-teal-300 mr-1">0{index + 1}.</span><a href={`#section-${item}`} className='capitalize' onClick={handleScroll}>
                                {item}
                            </a>
                        </li>
                    })}

                    <li>
                        <a href='/roman-filenko-cv.pdf' target="_blank" className='capitalize flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 text-teal-300 hover:text-white hover:bg-teal-500 transition'>
                            resume</a>
                    </li>
                </motion.ul>
            </nav>
        </header>
    );
}