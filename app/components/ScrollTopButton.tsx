"use client"

import React, { useEffect, useRef, useState } from 'react';

export const ScrollTopButton = ({ children }: { children?: React.ReactNode }) => {
    const [showTopBtn, setShowTopBtn] = useState(false);

    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
                if (buttonRef.current) {
                    buttonRef.current.classList.add('show')
                }
            } else {
                setShowTopBtn(false);
                if (buttonRef.current) {
                    buttonRef.current.classList.remove('show')
                }
            }
        });
    }, []);

    const handleGoToTop = (e: React.SyntheticEvent) => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <button className="scroll-to-top up-btn up-btn-default m-0 py-10 px-20 z-10 bg-white dark:bg-transparent" ref={buttonRef} onClick={handleGoToTop}>
            <span className="sr-only">
                Scroll to top
            </span>
            {showTopBtn && (<div className="up-icon"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 14 14" role="img"><polygon fillRule="evenodd" points="7 3 0 10.433 1.476 12 7 6.134 12.524 12 14 10.433"></polygon></svg></div>)}
        </button>
    )
}
