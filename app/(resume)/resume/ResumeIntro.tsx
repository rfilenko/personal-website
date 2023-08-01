'use client'

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

export default function ResumeIntro() {
    const introWrap = {
        hidden: {
            scale: .8,
            opacity: 0,
            transition: { when: "beforeChildren", type: "easeIn" }
        },
        show: {
            scale: 1,
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            },
        },
    }
    const introItem = {
        hidden: {
            scale: .8,
            opacity: 0
        },
        show: {
            scale: 1,
            opacity: 1,
        },
    }

    const heroImage = {
        hidden: {
            x: '100vw',
            opacity: 0
        },
        visible: {
            x: '0',
            opacity: 1,
            transition: {
                delay: 0.5,
                type: "spring", stiffness: 90
            },
        },
    }
    return <>
        <motion.div key="intro" initial="hidden" animate="show" variants={introWrap} className='about-content tracking-tight relative top-16 md:top-0 z-20' >
            <motion.h1 variants={introItem} className='font-sans font-extrabold text-5xl leading-12'>Roman Filenko</motion.h1>

            <motion.h2 variants={introItem} className='font-sans text-3xl leading-10 font-bold text-teal-400'>Frontend Developer
                <span className='text-white'>.</span>
            </motion.h2>
            <motion.p variants={introItem} className='text-gray-200'>I like to code and build stuff on internet, create digital experiences for the web.</motion.p>
        </motion.div>

        <motion.div key="image" initial="hidden" animate="visible" variants={heroImage} transition={{ duration: 0.5 }} className='about-image absolute top-8 md:top-0 right-0 z-10 w-[225px] md:w-[300px] rounded-full overflow-hidden md:relative'>
            <Image src="/handsome.jpg" width={300} height={350} priority className="w-full h-auto" alt="Handsome me" />
        </motion.div>
    </>
}