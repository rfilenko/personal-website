export default {
    name: 'recipe',
    type: 'document',
    title: 'Recipe',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'overview',
            type: 'string',
            title: 'Overview',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'title',
            },
        },
        {
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [
                {
                    type: 'block',
                },
                {
                    type: 'image',
                    fields: [
                        {
                            type: 'text',
                            name: 'alt',
                            title: 'Alternative Text',
                        },
                    ],
                },
            ],
        },
        {
            title: 'Categories',
            name: 'categories',
            type: 'array',
            options: {
                list: [
                    { title: 'dessert', value: 'dessert' },
                    { title: 'main', value: 'main' }
                ], // <-- predefined values
                layout: 'radio' // <-- defaults to 'dropdown'
            },
            of: [
                {
                    type: 'string',
                }
                // {
                //     type: 'categories',
                //     to: [
                //         { type: 'dessert' },
                //         { type: 'main' }
                //     ]
                // }
            ]
        },
    ],
}