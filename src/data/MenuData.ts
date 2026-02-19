import { StaticImageData } from "next/image";



interface MenuItem {
    id: number;
    title: string;
    link: string;
    has_dropdown: boolean;
    mega_munu?: {
        id: number;
        img: StaticImageData;
        btn_1: string;
        btn_link1: string;
        btn_2?: string;
        btn_link2?: string;
        title: string;
    }[];
    sub_menus?: {
        link: string;
        title: string;
    }[];
}

const menu_data: MenuItem[] = [
    {
        id: 1,
        title: "Home",
        link: "/",
        has_dropdown: false,
      
    },
    {
        id: 2,
        has_dropdown: false,
        title: "About",
        link: "/about",
    },
    {
        id: 3,
        title: "Services",
        link: "/service",
        has_dropdown: false,
      
    },
    // {
    //     id: 4,
    //     title: "Pages",
    //     link: "#",
    //     has_dropdown: true,
    //     sub_menus: [
    //         { link: "/case", title: "Case Study 01" },
    //         { link: "/case-2", title: "Case Study 02" },
    //         { link: "/case-details", title: "Case Study Details" },
    //         { link: "/team", title: "Our Team" },
    //         { link: "/team-details", title: "Team Details" },
    //         { link: "/pricing", title: "Pricing" },
    //         { link: "/faq", title: "FAQ's" },
    //         { link: "/not-found", title: "404 Error" },
    //     ],
    // },
    {
        id: 5,
        has_dropdown: false,
        title: "Portfolio",
        link: "/portfolio",
    },
    {
        id: 6,
        has_dropdown: false,
        title: "Contact",
        link: "/contact",
    },
];

export default menu_data;