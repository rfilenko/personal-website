import { createClient } from "next-sanity";

const projectId = "y6bljokk";
const dataset = "production";
const apiVersion = "2023-01-01";

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
});

export async function getPostData() {
    const query = `*[_type == 'post']`;
    const data = await client.fetch(query)
    return data
}

export async function getRecipeData() {
    const query = `*[_type == 'recipe']`;
    const data = await client.fetch(query)
    
    return data
}

export async function getSlugData(slug: string) {
    const query = `*[_type == "recipe" && slug.current == "${slug}"][0]`;

    const data = await client.fetch(query);

    return data;
}