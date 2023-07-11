import { Recipe } from "@/app/lib/interface";
import { client } from "@/app/lib/sanity";

import { urlFor } from "@/app/lib/sanityImageUrl";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

async function getData(slug: string) {
    const query = `*[_type == "recipe" && slug.current == "${slug}"][0]`;

    const data = await client.fetch(query);

    return data;
}

export default async function RecipePage({params}: {
    params: { slug: string };
}) {
    const data = (await getData(params.slug)) as Recipe;

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
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
            <header className="pt-6 xl:pb-6">
                <div className="space-y-1 text-left">
                    <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
                        {data.title}
                    </h1>
                    <span className="inline-block mt-2 text-base font-medium leading-6 text-teal-500">
                        {new Date(data._createdAt).toDateString()}
                    </span>
                </div>
            </header>

            {data.categories && <div className="mt-4 font-bold">Category: <div className="inline-flex gap-2">{data.categories?.map(cat => <span className="font-normal text-red-500">{cat}</span>)}</div></div>}

            <div className="divide-y divide-gray-200 pb-2 dark:divide-gray-700 xl:divide-y-0">
                <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
                    <div className="prose max-w-none mt-2 dark:prose-invert">
                        <PortableText
                            value={data.content}
                            components={PortableTextComponent}
                        />
                    </div>
                </div>

                <div>INGRIDIENTS:
                    <div>2 medium eggs</div>
                    <div>0.50 cup quick cook oatmeal (use gluten free oats for gf)</div>
                </div>
            </div>
        </div>
    );
}