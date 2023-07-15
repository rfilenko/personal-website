"use client"

import React, { useEffect, useRef, useState } from 'react';
import { IngridientsButton } from './IngridientsButton';

type ServingsProps = {
    children?: React.ReactNode;
    value: number
};

export default function Servings({ children, value }: ServingsProps) {
    const [val, setVal] = useState(0);
    const refPlus = useRef<HTMLElement>(null);
    const refMinus = useRef<HTMLElement>(null);

    useEffect(() => {
        setVal(value)
    }, [value]);

    const handleAddClick = () => {
        setVal((prev) => {
            if (refMinus.current) {
                refMinus.current.removeAttribute("disabled")
                refMinus.current.classList.remove("disabled:opacity-25")
            }

            if (prev >= 10) {
                if (refPlus.current) {
                    refPlus.current.setAttribute("disabled", '')
                    refPlus.current.classList.add("disabled:opacity-25")
                }
                return prev
            } else {
                return prev + 1
            }
        });
    }

    const handleMinClick = () => {
        setVal((prev) => {
            if (prev <= 1) {
                if (refMinus.current) {
                    refMinus.current.setAttribute("disabled", '')
                    refMinus.current.classList.add("disabled:opacity-25")
                }
                return prev

            } else {
                if (refPlus.current) {
                    refPlus.current.removeAttribute("disabled")
                    refPlus.current.classList.remove("disabled:opacity-25")
                }
                return prev - 1
            }
        }
        );
    }

    return <div className='flex gap-2 items-center'>
        <IngridientsButton handleClick={handleAddClick} buttonRef={refPlus}>+</IngridientsButton>
        <span className='ingridients-value font-sans font-semibold text-xl w-4 shrink-0 flex items-center'>{val}</span>
        <IngridientsButton handleClick={handleMinClick} buttonRef={refMinus}>-</IngridientsButton>
        {children}
    </div>
}