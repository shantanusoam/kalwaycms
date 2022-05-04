export default {
  type: 'object',
  name: 'infoRows',
  title: 'Info rows',
  fields: [
    {
      type: 'string',
      name: 'title',
    },
    {
      type: 'string',
      name: 'label',
    },
    {
      type: 'array',
      name: 'rows',
      of: [{ type: 'imageSection' }],
    },
    {
      name: 'cta',
      type: 'cta',
      title: 'Call to action',
    },
    {
      name: 'image',
      type: 'figure',
      title: 'Image',
    },
  ],
};
