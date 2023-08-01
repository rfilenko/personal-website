"use client"

import { useEffect, useState } from 'react';
import { Recipe } from '@/app/lib/interface';
import RecipesHeader from './RecipesHeader';
import Filter from './Filter';
import RecipesList from './RecipesList';

export default function RecipesBlock({ recipesData }: { recipesData: Recipe[] }) {
    const [recipes, setRecipes] = useState<Recipe[]>([])
    const [recipesTotal, setRecipesTotal] = useState<Recipe[]>([])
    const [isFiltered, setIsFiltered] = useState(false)

    useEffect(() => {
        setRecipes(recipesData)
        setRecipesTotal(recipesData)
    }, [])

    const handleFilterClick = (val: string) => {
        const filterred = recipesData.filter(item => item.categories.includes(val))
        setIsFiltered(true)
        setRecipes(filterred)
    }

    const handleClearClick = () => {
        setRecipes(recipesTotal)
        setIsFiltered(false)
    }

    return <>
        <RecipesHeader recipesData={recipes} isFiltered={isFiltered} />
        <div className='flex gap-2 justify-between'>

            <Filter recipesData={recipes} handleClick={handleFilterClick} />

            {isFiltered && <button className="ml-auto text-white bg-orange-500 hover:bg-orange-700 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-3 py-1.5 mr-2 mb-2 dark:bg-teal-400 dark:hover:bg-teal-600 focus:outline-none dark:focus:ring-teal-700" onClick={handleClearClick}>Clear</button>}
        </div>

        <RecipesList recipesData={recipes} />
    </>
}