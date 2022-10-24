export const menu = [
    {
        type: "group",
        title: "Group 1",
        isActive: true,
        submenu: [
            {
                type: "group",
                title: "Sub Group 1",
                isActive: true,
                submenu: [
                    {
                        type: "image",
                        title: "Picture 1"
                    },
                    {
                        type: "image",
                        title: "Picture 2"
                    },
                    {
                        type: "image",
                        title: "Picture 3"
                    },
                ]
            },
            {
                type: "group",
                title: "Sub Group 2",
                submenu: [
                    {
                        type: "group",
                        title: "Sub Group Level 3",
                        submenu: [
                            {
                                type: "image",
                                title: "image"
                            },
                            {
                                type: "image",
                                title: "image"
                            },
                        ]
                    },
                    {
                        type: "image",
                        title: "image"
                    },
                ]
            },
        ]
    },
    {
        type: "group",
        title: "Group 2",
        submenu: [
            {
                type: "image",
                title: "Picture 1"
            },
            {
                type: "image",
                title: "Picture 2"
            },
        ]
    },
    {
        type: "group",
        title: "Group 3",
        submenu: [
            {
                type: "image",
                title: "Picture 1"
            },
            {
                type: "image",
                title: "Picture 2"
            },
        ]
    },
    {
        type: "group",
        title: "Group 4",
        submenu: [
            {
                type: "group",
                title: "Sub Group 3",
                submenu: [
                    {
                        type: "image",
                        title: "Picture 1"
                    },
                    {
                        type: "image",
                        title: "Picture 2"
                    },
                ]
            },
            {
                type: "image",
                title: "Picture 1"
            },
            {
                type: "image",
                title: "Picture 2"
            },
        ]
    }
];