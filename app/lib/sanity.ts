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

export async function getRecipeData() {
    const query = `*[_type == 'recipe']`;
    const data = await client.fetch(query)
    
    return data
}