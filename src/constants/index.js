export const menu = [
    {
        type: "folder",
        title: "Documents",
        isActive: true,
        submenu: [
            {
                type: "folder",
                title: "Pictures",
                isActive: true,
                submenu: [
                    {
                        type: "image",
                        title: "picture_1.png"
                    },
                    {
                        type: "image",
                        title: "picture_2.png"
                    }
                ]
            },
            {
                type: "folder",
                title: "Videos",
                submenu: [
                    {
                        type: "video",
                        title: "video_1.mp4"
                    },
                    {
                        type: "video",
                        title: "video_2.mp4"
                    }
                ]
            },
            {
                type: "folder",
                title: "Musics",
                submenu: [
                    {
                        type: "music",
                        title: "music_1.mp3"
                    },
                    {
                        type: "music",
                        title: "music_mp3"
                    }
                ]
            },
            {
                type: "folder",
                title: "Downloads",
                submenu: [
                    {
                        type: "folder",
                        title: "Jujutsu Kaisen",
                        submenu: [
                            {
                                type: "video",
                                title: "episode-1.mp4"
                            },
                            {
                                type: "video",
                                title: "episode-2.mp4"
                            },
                        ]
                    },
                    {
                        type: "archive",
                        title: "android-studio-2021.3.1.17-linux.tar.gz"
                    },
                ]
            },
        ]
    },
    {
        type: "folder",
        title: "Desktop",
        submenu: [
            {
                type: "image",
                title: "Screen_Shot_2022_10_21_at_12.12.47.png"
            },
            {
                type: "video",
                title: "One_piece_episode_1037.mp4"
            },
        ]
    },
    {
        type: "folder",
        title: "Workspace",
        submenu: [
            {
                type: "folder",
                title: "Lab react",
                submenu: []
            },
            {
                type: "folder",
                title: "Lab Laravel",
                submenu: []
            },
        ]
    },
    {
        type: "folder",
        title: "Public",
        submenu: [
            {
                type: "folder",
                title: "week",
                submenu: [
                    {
                        type: "image",
                        title: "picture.jpg"
                    },
                    {
                        type: "music",
                        title: "song.mp3"
                    },
                ]
            },
            {
                type: "video",
                title: "video.mp4"
            },
            {
                type: "image",
                title: "picture.gif"
            },
        ]
    }
];