import { TbLayoutDashboard, TbLayoutDashboardFilled  } from "react-icons/tb";
import { BsPeople, BsPeopleFill  } from "react-icons/bs";
import { MdOutlineWorkOutline, MdWork  } from "react-icons/md";
import { TbCashBanknote, TbCashBanknoteFilled  } from "react-icons/tb";
import { BsCalendarDate, BsCalendarDateFill  } from "react-icons/bs";


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
        label: "Jobs",
        href: "/jobs",
        icon: MdOutlineWorkOutline,
        iconActive: MdWork,
        subLinks: null
    },
    {
        label: "Payroll",
        href: "/payroll",
        icon: TbCashBanknote,
        iconActive: TbCashBanknoteFilled ,
        subLinks: null
    },
    {
        label: "Calender",
        href: "/calender",
        icon: BsCalendarDate,
        iconActive: BsCalendarDateFill,
        subLinks: null
    },
]