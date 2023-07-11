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
    categories: [string];
    _id: string;
    slug: {
        current: string;
    };
    _createdAt: string;
}