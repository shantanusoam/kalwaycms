export default {
  name: 'Footer',
  title: 'footer',
  type: 'document',
  fields: [

    {
      name: 'Heading1',
      title: 'Title',
      type: 'string',
      link: 'none',
    },
    {
        name: 'Heading1_sub',
        title: 'Title',
        type: 'string',
        link: 'none',
      },
      {
        name: 'Heading2',
        title: 'Title',
        type: 'string',
        link: 'none',
    },
    {
        name: 'Heading2_sub',
        title: 'Title',
        type: 'string',
        link: 'none',
    },
    {
        name: 'Heading3',
        title: 'Title',
        type: 'string',
        link: 'none',
    },
    {
        name: 'Heading3_sub',
        title: 'Title',
        type: 'string',
        link: 'none',
    },
    {
        name: 'Heading4',
        title: 'Title',
        type: 'string',
        link: 'none',
    },
    {
        name: 'Heading3_sub',
        title: 'Title',
        type: 'string',
         link: 'none',
    }

    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
};
