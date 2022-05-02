export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Footer Selection',
      description: 'Add, edit, and reorder sections',
      of: [{ type: 'textSection' }],
    },
  ],
};
