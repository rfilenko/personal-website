export default {
    name: 'project',
    type: 'document',
    title: 'Project',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name',
        },
        {
            name: 'link',
            type: 'string',
            title: 'Link',
        },
        {
            name: 'description',
            type: 'string',
            title: 'Description',
        },
        {
            name: 'image',
            type: 'image',
            title: 'Proejct Image',
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