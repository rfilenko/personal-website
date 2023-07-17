export interface Dino {
    name: string;
    type: string;
    color: string;
    diet: string;
    food: string;
    dimensions: string;
    content: any;
    _id: string;
    slug: {
        current: string;
    };
    _createdAt: string;
    _type: string;
    _rev: string;
    dinoData?: any[];
}
export interface Recipe {
    title: string;
    overview: string;
    preparation: string;
    content: any;
    ingridients: any;
    instructions: [string];
    categories: [string];
    _id: string;
    slug: {
        current: string;
    };
    _createdAt: string;
}
export interface Job {
    date: string;
    position: string;
    company: string;
    link: string;
    description: string;
    content: any;
    tech: [string];
    _id: string;
    _createdAt: string;
}