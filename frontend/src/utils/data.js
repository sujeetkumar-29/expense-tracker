import {
    LuLayoutDashboard,
    LuHandCoins,
    LuWalletMinimal,
    LuLogOut,
} from "react-icons/lu";
import { GrTransaction } from "react-icons/gr";

export const SIDE_MENU_DATA = [
    {
        id: "01",
        label: "Dashboard",
        icon: LuLayoutDashboard,
        path: "/dashboard",
    },
    {
        id: "02",
        label: "Income",
        icon: LuWalletMinimal,
        path: "/income",
    },
    {
        id: "03",
        label: "Expense",
        icon: LuHandCoins,
        path: "/expense",
    },
    {
        id: "04",
        label: "All Transaction",
        icon: GrTransaction,
        path: "/all-transaction",
    },
    {
        id: "06",
        label: "Logout",
        icon: LuLogOut,
        path: "/",
    },
]
