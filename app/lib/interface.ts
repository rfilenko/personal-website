export interface Post {
    title: string;
    overview: string;
    content: any;
    _id: string;
    slug: {
        current: string;
    };
    _createdAt: string;
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