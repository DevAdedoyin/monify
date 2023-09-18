// import { FaTh } from "react-icons/fa"
import addnew from "../assets/images.addnewc.png";
import addpro from "../assets/images.addproc.png";
import admins from "../assets/images.adminsc.png";
import dashboard from "../assets/images.dashboardc.png";
import logout from "../assets/images.logoutc.png";
import manage from "../assets/images.managec.png";
import order from "../assets/images.orderc.png";
import payment from "../assets/images.paymentc.png";
import setup from "../assets/images.setupc.png";
import update from "../assets/images.updatec.png";
import stocks from "../assets/images.stocksc.png";

const SidebarItems = {
    account: [
        {
            path:"/",
            name:"Dashboard",
            icon: dashboard
        },
        {
            path:"/",
            name:"Updates",
            icon: update
        },
        {
            path:"/",
            name:"Payment",
            icon: payment
        },
        {
            path:"/",
            name:"My Order",
            icon: order
        },
        {
            path:"/",
            name:"Admin Setting",
            icon: admins
        },
    ],
    product: [
        {
            path:"/",
            name:"Add New",
            icon: addnew
        },
        {
            path:"/",
            name:"My Products",
            icon: addpro
        },
        {
            path:"/",
            name:"Stocks",
            icon: stocks
        },
    ],
    admin: [
        {
            path:"/",
            name:"Account Setup",
            icon: setup
        },
        {
            path:"/",
            name:"Manage User",
            icon: manage
        },
        {
            path:"/",
            name:"Logout",
            icon: logout
        },
    ]
}

export default SidebarItems;