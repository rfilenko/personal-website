export default {
    name: 'job',
    type: 'document',
    title: 'Job',
    fields: [
        {
            name: 'company',
            type: 'string',
            title: 'Company',
        },
        {
            name: 'date',
            type: 'string',
            title: 'Date',
        },
        {
            name: 'position',
            type: 'string',
            title: 'Position',
        },
        {
            name: 'link',
            type: 'string',
            title: 'Link',
        },
        {
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [
                {
                    type: 'block',
                },
            ],
        },
        {
            name: 'tech',
            title: 'Tech:',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tech'
            },
            validation: Rule => Rule.required(),
        }
    ],
}