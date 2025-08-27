const formConfig = {
    title: 'Sample Form',
    fields: [
        {
            label: 'Name',
            type: 'text',
            required: true,
        },
        {
            label: 'Email',
            type: 'email',
            required: true,
        },
        {
            label: 'Message',
            type: 'textarea',
            required: false,
        },
    ],
};

export default formConfig;