import { TbLayoutDashboard, TbLayoutDashboardFilled  } from "react-icons/tb";
import { BsPeople, BsPeopleFill  } from "react-icons/bs";


export const DashboardSidebarLinks = [
    {
        label: "Dashboard",
        href: "/dashboard",
        icon: TbLayoutDashboard,
        iconActive: TbLayoutDashboardFilled,
        subLinks: null,
    },
    {
        label: "Employees",
        href: "/employees",
        icon: BsPeople,
        iconActive: BsPeopleFill ,
        subLinks: [
            {
                label: "Create Employee",
                href: "/employees/create",
            },
        ],
    },
    {
        label: "Vacancies",
        href: "/vacancies",
        icon: BsPeople,
        iconActive: BsPeopleFill ,
        subLinks: [
            {
                label: "Create Vacancy",
                href: "/employees/create",
            },
        ],
    },
]