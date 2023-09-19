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
    },
    {
      path: "/",
      name: "Updates",
      icon: updatec,
    },
    {
      path: "/",
      name: "Payment",
      icon: paymentc,
    },
    {
      path: "/",
      name: "My Order",
      icon: orderc,
    },
    {
      path: "/",
      name: "Admin Setting",
      icon: adminsc,
    },
  ],
  product: [
    {
      path: "/",
      name: "Add New",
      icon: addnewc,
    },
    {
      path: "/",
      name: "My Products",
      icon: addproc,
    },
    {
      path: "/",
      name: "Stocks",
      icon: stocksc,
    },
  ],
  admin: [
    {
      path: "/",
      name: "Account Setup",
      icon: setupc,
    },
    {
      path: "/",
      name: "Manage User",
      icon: managec,
    },
    {
      path: "/",
      name: "Logout",
      icon: logoutc,
    },
  ],
};

export default NavItems;
