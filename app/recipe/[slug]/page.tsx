import { getSlugData } from "@/app/lib/sanity";
import { Button } from "@/app/components/Button";
import { Recipe } from "@/app/lib/interface";

import { urlFor } from "@/app/lib/sanityImageUrl";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export default async function RecipePage({params}: {
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
     
            <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
            <header className="pt-6 xl:pb-6">
                <div className="space-y-1 text-left">
                    <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
                        {data.title}
                    </h1>
                    <span className="inline-block mt-2 text-sm leading-2 text-teal-500">
                        {new Date(data._createdAt).toDateString()}
                    </span>
                    </div>
                    
                {/* preparation */}
                {data.preparation && <div className="preparation mt-2 text-gray-400 text-sm flex flex-wrap items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 inline-block mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-black font-bold dark:text-white">Preparation:</span>
                    <span className="nowrap">{data.preparation}</span>
                </div>}
            </header>
                
            {/* categories */}
            {data.categories && <div className="mt-2 font-bold">Category: <div className="inline-flex gap-2">{data.categories?.map(cat => <span key={cat} className="font-normal text-red-500">{cat}</span>)}</div></div>}

            <div className="divide-y divide-gray-200 pb-2 dark:divide-gray-700 xl:divide-y-0">
                <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
                    <div className="desc prose max-w-none mt-2 dark:prose-invert">
                        <PortableText
                            value={data.content}
                            components={PortableTextComponent}
                        />
                    </div>
                </div>

                {/* <div>INGRIDIENTS:
                    <div>2 medium eggs</div>
                    <div>0.50 cup quick cook oatmeal (use gluten free oats for gf)</div>
                </div> */}
            </div>
            </div>
        </>
    );
}