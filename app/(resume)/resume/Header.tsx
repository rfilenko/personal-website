'use client'

import React from 'react'

const navItems = ['about', 'experience', 'projects', 'contact']

export default function Header() {
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
        <header className='flex text-white justify-end py-4'>
            <nav>
                <ul className='flex gap-4'>
                    {navItems.map(item => {
                        return <li key={item}>
                            <a href={`#section-${item}`} className='capitalize' onClick={handleScroll}>{item}</a>
                        </li>
                    })}
                </ul>
            </nav>
        </header>
    );
}