"use client"

import { Recipe } from '@/app/lib/interface';

export default function Filter({ recipesData, handleClick }: { recipesData: Recipe[], handleClick: (value: string) => void }) {

    return <div className='justify-self-start'>
        <span className='mr-2'>Filter by category:</span>
        <button className="text-white bg-teal-500 hover:bg-teal-700 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-3 py-1.5 mr-2 mb-2 dark:bg-teal-400 dark:hover:bg-teal-600 focus:outline-none dark:focus:ring-teal-700" onClick={() => handleClick('main')}>main</button>
        <button className="text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-1.5 mr-2 mb-2 dark:bg-red-400 dark:hover:bg-red-600 focus:outline-none dark:focus:ring-red-700" onClick={() => handleClick('dessert')}>dessert</button>
    </div>
}