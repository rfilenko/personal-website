export default {
    name: 'dino',
    type: 'document',
    title: 'Dino',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name',
        },
        {
            name: 'type',
            type: 'string',
            title: 'Type',
        },
        {
            name: 'color',
            type: 'string',
            title: 'Color',
        },
        {
            name: 'diet',
            type: 'string',
            title: 'Diet',
        },
        {
            name: 'food',
            type: 'string',
            title: 'Food',
        },
        {
            name: 'dimensions',
            type: 'string',
            title: 'Dimensions',
        },
        {
            name: 'lived',
            type: 'string',
            title: 'Lived',
        },
        {
            name: 'found',
            type: 'string',
            title: 'Found',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'name',
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
    ],
}