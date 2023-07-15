import Image from "next/image";

import { getSlugData } from "@/app/lib/sanity";
import { Recipe } from "@/app/lib/interface";
import { urlFor } from "@/app/lib/sanityImageUrl";
import { PortableText } from "@portabletext/react";

import { Button } from "@/app/components/Button";
import { Visual } from "@/app/components/Visual";

export async function generateMetadata({ params }: {
    params: { slug: string };
}) {
    const data = (await getSlugData(params.slug)) as Recipe;

    return {
        title: `Recipe - ${data.title}`,
        description: data.overview
    }
}

export default async function RecipePage({ params }: {
    params: { slug: string };
}) {

    const data = (await getSlugData(params.slug)) as Recipe;

    const PortableTextComponent = {
        types: {
            image: ({ value }: { value: any }) => (
                <Image
                    src={urlFor(value).url()}
                    alt="Image"
                    className="rounded-lg"
                    width={400}
                    height={400}
                />
            ),
        },
    };

    return (
        <>
            <div>
                <Button href="/recipes">Back to recipes</Button>
            </div>

            <div className="">
                <header className="pt-6 xl:pb-6">
                    <div className="space-y-1 text-left">
                        <h1 className="font-sans text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
                            {data.title}
                        </h1>
                        <span className="inline-block mt-2 text-sm leading-2 text-teal-500">
                            {new Date(data._createdAt).toDateString()}
                        </span>
                    </div>

                    {/* preparation */}
                    {data.preparation && <div className="preparation mt-2 text-gray-400 text-sm flex flex-wrap items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 inline-block">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-black font-bold dark:text-white">Prep time:</span><span className="nowrap">{data.preparation}</span>
                    </div>}
                </header>

                {/* categories */}
                {data.categories && (
                    <div className="mt-2 font-bold">Category:
                        <div className="inline-flex gap-2">{data.categories?.map(cat => (
                            <>
                                {cat == 'dessert' ? <Visual variant='dessert' /> : <Visual variant='main' />}
                                <span key={cat} className="ml-2 font-normal text-red-500">{cat}</span>
                            </>
                        ))}</div>
                    </div>)}

                <div className="">
                    <div className="xl:col-span-3 xl:row-span-2 xl:pb-0">
                        <div className="desc prose max-w-none mt-2 dark:prose-invert">
                            <PortableText
                                value={data.content}
                                components={PortableTextComponent}
                            />
                        </div>
                    </div>

                    {data.instructions && <div className="mt-8 desc prose">
                        <h2 className="text-2xl font-semibold mb-0">Instructions:</h2>
                        <ul className="instructions-list">
                            {data.instructions?.map(i => <li key={i} className="instructions-item">{i}</li>)}
                        </ul>
                    </div>}
                </div>
            </div>
        </>
    );
}