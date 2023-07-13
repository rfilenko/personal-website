import { PortableText } from '@portabletext/react';
import { Recipe } from '@/app/lib/interface';
import { getRecipeData } from '@/app//lib/sanity';
import Link from 'next/link';
import { urlFor } from '@/app/lib/sanityImageUrl';
import Image from 'next/image';

export const metadata = {
	title: "Recipes | HomeApp",
	description: "List of available recipes",
};

export default async function Home() {
	const data = await getRecipeData() as Recipe[]

	const PortableTextComponent = {
		types: {
			image: ({ value }: { value: any }) => (
				<Image
					src={urlFor(value).url()}
					alt="Image"
					className="rounded-lg absolute w-full h-full object-cover"
					width={175}
					height={175}
				/>
			),
		},
	};

	return (
		<div className="">
			<div className='font-semibold flex gap-2 justify-between items-center'>
				<h1 className='my-2 text-3xl'>List of recipes</h1>
				<div className='text-2xl'>Total: <span>{data.length} recipes</span></div>
			</div>

			<ul className='recipe-list mt-4'>
				{data.map((recipe) => (

					<li key={recipe._id} className="recipe-item p-4">
						<Link
							href={`/recipe/${recipe.slug.current}`}
							prefetch
							className="space-y-3 xl:col-span-3 h-full flex flex-col justify-between relative"
						>
							<div className='flex gap-4 justify-between'>
								<h3 className="text-xl font-bold leading-6 tracking-tight text-gray-900 dark:text-gray-100">
									{recipe.title}
								</h3>
								<span className='text-white right-0 text-xs font-bold bg-red-500 p-1 rounded self-start'>{recipe.categories[0]}</span>
							</div>

							<div className="recipe-image relative overflow-hidden h-[150px] shrink-0 grow-3">
								<PortableText
									value={recipe.content}
									components={PortableTextComponent}
								/>
							</div>

							<p className="prose max-w-none text-gray-500 dark:text-gray-400 line-clamp-2 mt-auto leading-6">
								{recipe.overview}
							</p>
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
