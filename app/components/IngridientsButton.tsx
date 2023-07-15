"use client"

import React from 'react';

type IngridientsButtonProps = {
    children?: React.ReactNode
    handleClick: () => void
    buttonRef?: React.Ref<any>
}

export const IngridientsButton = ({ children, handleClick, buttonRef }: IngridientsButtonProps) => {
    return (
        <button className="ingridients-button border-solid border-2 border-black rounded font-bold py-1 px-3 text-base" onClick={handleClick} ref={buttonRef}> {children}</button>
    )
}