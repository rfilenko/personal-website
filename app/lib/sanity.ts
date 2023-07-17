import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

import { projectId, dataset, apiVersion } from '@/environment'

export const config = {
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
}

export const client = createClient(config);
// export const urlFor = (source) => createImageUrlBuilder(config).image(source)

export async function getRecipeData() {
    const query = `*[_type == 'recipe']`;
    const data = await client.fetch(query)
    return data
}

export async function getJobData() {
    const query = `*[_type == 'job'] | order(_createdAt asc)`;
    const data = await client.fetch(query)
    return data
}

export async function getDinoData() {
    const query = `*[_type == 'dino']`;
    const data = await client.fetch(query)
    return data
}

export async function getSlugData(slug: string) {
    const query = `*[_type == "recipe" && slug.current == "${slug}"][0]`;
    const data = await client.fetch(query);
    return data;
}