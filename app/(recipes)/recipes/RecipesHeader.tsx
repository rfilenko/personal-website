"use client"

import { Recipe } from '@/app/lib/interface';

export default function RecipesHeader({ recipesData, isFiltered }: { recipesData: Recipe[], isFiltered: boolean }) {
    return <>
        <div className='font-semibold flex flex-wrap md:flex-nowrap gap-2 justify-between items-center mb-2'>
            <h1 className='my-2 text-3xl'>List of recipes</h1>

            <div className='text-xl md:text-2xl flex gap-2 items-center'>
                {isFiltered ? '' : <span className='md:hidden'>Total</span>}
                <p className='hidden md:inline-block'>{isFiltered ? 'Filtered' : 'Available'}:</p>
                <p className='inline-flex justify-center items-center bg-orange-500 p-1 rounded-full w-8 h-8 outline -outline-offset-2 outline-gray-200'>
                    <span className='text-gray-700 text-sm font-bold'>{recipesData.length}</span>
                </p>
            </div>
        </div>
    </>
}