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
            name: 'preparation',
            type: 'string',
            title: 'Preparation',
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
            name: 'ingridients',
            type: 'array',
            title: 'Ingridients',
            of: [
                {
                    type: 'block',
                }
            ],
        },
        {
            name: 'instructions',
            title: 'Instructions:',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'instructions'
            },
            validation: Rule => Rule.required(),
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
            ]
        },
    ],
}