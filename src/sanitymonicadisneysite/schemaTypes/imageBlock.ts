
export default {
  name: 'imageBlock',
  title: 'Image block',
  type: 'image',
  fields: [
    // {
    //   name: 'image',
    //   title: 'Image',
    //   type: 'image',
    //   validation: Rule => Rule.required(),
    // },
    {
      name: 'alt',
      title: 'Description of the image for screen readers',
      description: '⚡ Optional but highly encouraged to make content more accessible for visually impaired folks.',
      type: 'string',
    },
    {
      name: 'size',
      title: 'Size',
      type: 'string',
      initialValue: 'md',
      options: {
        list: [
          {
            value: 'sm',
            title: 'Small'
          },
          {
            value: 'md',
            title: 'Medium'
          },
          {
            value: 'lg',
            title: 'Large'
          },
        ]
      }
    },
    {
      name: 'alignment',
      title: 'Alignment',
      type: 'string',
      initialValue: 'center',
      options: {
        layout: 'radio',
        list: [
          {
            value: 'left',
            title: 'Left'
          },
          {
            value: 'center',
            title: 'Center'
          },
          {
            value: 'right',
            title: 'Right'
          },
        ]
      }
    },
  ],
}