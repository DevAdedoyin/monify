// import { FaTh } from "react-icons/fa"
import addnewc from "../../assets/images/addnewc.png";
import addproc from "../../assets/images/addproc.png";
import adminsc from "../../assets/images/adminsc.png";
import dashboardc from "../../assets/images/dashboardc.png";
import logoutc from "../../assets/images/logoutc.png";
import managec from "../../assets/images/managec.png";
import orderc from "../../assets/images/orderc.png";
import paymentc from "../../assets/images/paymentc.png";
import setupc from "../../assets/images/setupc.png";
import updatec from "../../assets/images/updatec.png";
import stocksc from "../../assets/images/stocksc.png";

const NavItems = {
  account: [
    {
      path: "/",
      name: "Dashboard",
      icon: dashboardc,
      id: 0,
    },
    {
      path: "/",
      name: "Updates",
      icon: updatec,
      id: 1,
    },
    {
      path: "/",
      name: "Payment",
      icon: paymentc,
      id: 2,
    },
    {
      path: "/",
      name: "My Order",
      icon: orderc,
      id: 3,
    },
    {
      path: "/",
      name: "Admin Setting",
      icon: adminsc,
      id: 4,
    },
  ],
  product: [
    {
      path: "/",
      name: "Add New",
      icon: addnewc,
      id: 5,
    },
    {
      path: "/",
      name: "My Products",
      icon: addproc,
      id: 6,
    },
    {
      path: "/",
      name: "Stocks",
      icon: stocksc,
      id: 7,
    },
  ],
  admin: [
    {
      path: "/",
      name: "Account Setup",
      icon: setupc,
      id: 8,
    },
    {
      path: "/",
      name: "Manage User",
      icon: managec,
      id: 9,
    },
    {
      path: "/",
      name: "Logout",
      icon: logoutc,
      id: 10,
    },
  ],
};

export default NavItems;
