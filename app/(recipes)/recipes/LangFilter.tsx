"use client"

import { Recipe } from '@/app/lib/interface';

export default function Filter({ recipesData, handleClick }: { recipesData: Recipe[], handleClick: (value: string) => void }) {

    return <div className='md:ml-auto'>
        <span className='mr-2 text-base font-bold'>Lang:</span>
        <button className="text-white bg-teal-500 hover:bg-teal-700 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-3 py-1.5 mr-2 mb-2 dark:bg-teal-400 dark:hover:bg-teal-600 focus:outline-none dark:focus:ring-teal-700" onClick={() => handleClick('en')}>en</button>
        <button className="text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-1.5 mr-2 mb-2 dark:bg-red-400 dark:hover:bg-red-600 focus:outline-none dark:focus:ring-red-700" onClick={() => handleClick('ua')}>ua</button>
        <button className="text-white bg-orange-500 hover:bg-orange-700 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-3 py-1.5 mr-2 mb-2 dark:bg-orange-400 dark:hover:bg-orange-600 focus:outline-none dark:focus:ring-orange-700" onClick={() => handleClick('ru')}>ru</button>
    </div>
}