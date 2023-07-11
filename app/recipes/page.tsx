import {  Recipe } from '../lib/interface';
import { getRecipeData } from '../lib/sanity';
import Image from "next/image";
import Link from 'next/link';

export default async function Home() {
  const data = await getRecipeData() as Recipe[]  

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <Link
        href={`/`}
        prefetch
        className="flex text-xl font-bold leading-4 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-4 md:text-4xl md:leading-8 mb-4"
      >Back home</Link>
      <ul>
        {data.map((recipe) => (
          <li key={recipe._id} className="py-4">
            <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">   
              <Link 
                href={`/recipe/${recipe.slug.current}`}
                prefetch
                className="space-y-3 xl:col-span-3"
              >
                <div>
                  <h3 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                    {recipe.title}
                    </h3>
                </div>
                <p className="prose max-w-none text-gray-500 dark:text-gray-400 line-clamp-2">
                    {recipe.overview}
                </p>
              </Link>
            </article>
          </li>
        ))}
      </ul>
  </div>
  )
}
