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

export const faqData = [
    {
        title: "How to create a group booking ?",
        content: "Although you probably won’t get into any legal trouble if you do it just once, why risk it? If you made your subscribers a promise, you should honor that. If not, you run the risk of a drastic increase in opt outs, which will only hurt you in the long run."
    },
    {
        title: "Why do we use it ?",
        content: "No charges are put in place by SlickText when subscribers join your text list. This does not mean however that charges 100% will not occur. Charges that may occur fall under part of the compliance statement stating \"Message and Data rates may apply.\""
    },
    {
        title: "Where does it come from ?",
        content: "Now that you have a general idea of the amount of texts you will need per month, simply find a plan size that allows you to have this allotment, plus some extra for growth. Don't worry, there are no mistakes to be made here. You can always upgrade and downgrade."
    },
];

export const sidebarData = [
    {
        type: "group",
        text: "Menu",
    },
    {
        type: "firstGroup",
        text: "Dashboard",
        icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>),
        menu: [
            {
                type: "firstLink",
                text: "CRM",
                link: "/#crm"
            },
            {
                type: "firstLink",
                text: "ECommerce",
                link: "/#ecommerce"
            },
            {
                type: "firstLink",
                text: "Project",
                link: "/#project"
            },
        ]
    },
    {
        type: "firstGroup",
        text: "App",
        icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>),
        menu: [
            {
                type: "firstLink",
                text: "Calendar",
                link: "/#calendar"
            },
            {
                type: "firstLink",
                text: "Ecommerce",
                link: "/#ecommerce"
            },
            {
                type: "firstLink",
                text: "Project",
                link: "/#project"
            },
            {
                type: "firstLink",
                text: "Tasks",
                link: "/#tasks"
            },
        ]
    },
    {
        type: "group",
        text: "Pages",
    },
    {
        type: "firstGroup",
        text: "Authentication",
        icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>),
        menu: [
            {
                type: "firstLink",
                text: "Sign in",
                link: "/#sing-in"
            },
            {
                type: "firstLink",
                text: "Sing up",
                link: "/#sing-up"
            },
            {
                type: "firstLink",
                text: "Password Reset",
                link: "/#password-reset"
            },
            {
                type: "firstLink",
                text: "Lock Screen",
                link: "/#lock-screen"
            },
            {
                type: "firstLink",
                text: "Logout",
                link: "/#logout"
            },
            {
                type: "secondGroup",
                text: "Errors",
                menu: [
                    {
                        type: "secondLink",
                        text: "401",
                        link: "/#401"
                    },
                    {
                        type: "secondLink",
                        text: "403",
                        link: "/#403"
                    },
                    {
                        type: "secondLink",
                        text: "404",
                        link: "/#404"
                    },
                    {
                        type: "secondLink",
                        text: "500",
                        link: "/#500"
                    },
                ]
            },
        ]
    },
    {
        type: "firstGroup",
        text: "Landing",
        icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>),
        menu: [
            {
                type: "firstLink",
                text: "One Page",
                link: "/#one-page"
            },
        ]
    },
    {
        type: "group",
        text: "Components",
    },
    {
        type: "firstGroup",
        text: "Base UI",
        icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>),
        menu: [
            {
                type: "firstLink",
                text: "Alerts",
                link: "/#alerts"
            },
            {
                type: "firstLink",
                text: "Badges",
                link: "/#badges"
            },
            {
                type: "firstLink",
                text: "Buttons",
                link: "/#buttons"
            },
            {
                type: "firstLink",
                text: "Colors",
                link: "/#colors"
            },
            {
                type: "firstLink",
                text: "Cards",
                link: "/#cards"
            },
            {
                type: "firstLink",
                text: "Carousel",
                link: "/#carousel"
            },
            {
                type: "firstLink",
                text: "Dropdowns",
                link: "/#dropdowns"
            },
            {
                type: "firstLink",
                text: "Grid",
                link: "/#grid"
            },
            {
                type: "firstLink",
                text: "Images",
                link: "/#images"
            },
            {
                type: "firstLink",
                text: "Tabs",
                link: "/#Tabs"
            },
            {
                type: "firstLink",
                text: "Accordion & Collapse",
                link: "/#accordion-&-collapse"
            },
            {
                type: "firstLink",
                text: "Modals",
                link: "/#modals"
            },
            {
                type: "firstLink",
                text: "Offcanvas",
                link: "/#offcanvas"
            },
            {
                type: "firstLink",
                text: "Placeholders",
                link: "/#placeholders"
            },
            {
                type: "firstLink",
                text: "Progress",
                link: "/#progress"
            },
            {
                type: "firstLink",
                text: "Notifications",
                link: "/#notifications"
            },
            {
                type: "firstLink",
                text: "Media Object",
                link: "/#media-object"
            },
            {
                type: "firstLink",
                text: "Ember Video",
                link: "/#ember-video"
            },
            {
                type: "firstLink",
                text: "Typography",
                link: "/#typography"
            },
            {
                type: "firstLink",
                text: "Typography",
                link: "/#typography"
            },
            {
                type: "firstLink",
                text: "List",
                link: "/#list"
            },
            {
                type: "firstLink",
                text: "General",
                link: "/#general"
            },
            {
                type: "firstLink",
                text: "Ribbons",
                link: "/#ribbons"
            },
            {
                type: "firstLink",
                text: "Utilities",
                link: "/#utilities"
            },
        ]
    },
    {
        type: "firstGroup",
        text: "Forms",
        icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>),
        menu: [
            {
                type: "firstLink",
                text: "Basics Elements",
                link: "/#basics-elements"
            },
            {
                type: "firstLink",
                text: "Form Select",
                link: "/#form-select"
            },
            {
                type: "firstLink",
                text: "Checkboxs & Radio",
                link: "/#checkboxs-&-radio"
            },
            {
                type: "firstLink",
                text: "Pickers",
                link: "/#pickers"
            },
            {
                type: "firstLink",
                text: "Input Marks",
                link: "/#input-marks"
            },
            {
                type: "firstLink",
                text: "Advanced",
                link: "/#advanced"
            },
            {
                type: "firstLink",
                text: "Ranger Slider",
                link: "/#validation"
            },
            {
                type: "firstLink",
                text: "Wizards",
                link: "/#wizards"
            },
            {
                type: "firstLink",
                text: "Editors",
                link: "/#editors"
            },
            {
                type: "firstLink",
                text: "File Uploads",
                link: "/#file-uploads"
            },
            {
                type: "firstLink",
                text: "Select2",
                link: "/#select2"
            },
        ]
    },
    {
        type: "firstGroup",
        text: "Multi Level",
        icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>),
        menu: [
            {
                type: "firstLink",
                text: "Level 1.1",
                link: "/#level-1.1"
            },
            {
                type: "secondGroup",
                text: "Level 1.2",
                link: "/#level-1.2",
                menu: [
                    {
                        type: "secondLink",
                        text: "Level 2.1",
                        link: "/#level-2.1"
                    },
                    {
                        type: "thirdGroup",
                        text: "Level 2.2",
                        link: "/#level-2.2",
                        menu: [
                            {
                                type: "secondLink",
                                text: "Level 3.1",
                                link: "/#level-3.1"
                            },
                            {
                                type: "secondLink",
                                text: "Level 3.2",
                                link: "/#level-3.2"
                            },
                        ]
                    },
                ]
            },
        ]
    }
];