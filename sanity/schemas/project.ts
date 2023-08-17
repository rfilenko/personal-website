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
            name: 'githubLink',
            type: 'string',
            title: 'Github',
        },
        {
            name: 'description',
            type: 'string',
            title: 'Description',
        },
        {
            name: 'image',
            type: 'image',
            title: 'Project Image',
            options: {
                hotspot: true // <-- Defaults to false
            },
            fields: [
                {
                    name: 'caption',
                    type: 'string',
                    title: 'Caption',
                },
                {
                    name: 'attribution',
                    type: 'string',
                    title: 'Attribution',
                }
            ]
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