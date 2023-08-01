import { Recipe } from '@/app/lib/interface';
import { getRecipeData } from '@/app/lib/sanity';

import RecipesBlock from './RecipesBlock';

export const metadata = {
    title: "Recipes | HomeApp",
    description: "List of available recipes",
};

export default async function Home() {
    const recipesData = await getRecipeData() as Recipe[]
    console.log(recipesData);


    return (
        <div className="">
            <RecipesBlock recipesData={recipesData} />
        </div>
    )
}
