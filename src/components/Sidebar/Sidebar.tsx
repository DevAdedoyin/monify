import React, { ReactNode, useState } from "react";
import NavComponents from "./NavComponents";
import NavItems from "./NavItems";
import SidebarStyle from "./Sidebar.module.css";
import { FaBars } from "react-icons/fa";

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

export default function Sidebar({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={SidebarStyle.container}>
      <div
        style={{ width: isOpen ? "18%" : "10%" }}
        className={SidebarStyle.sideNavContainer}
      >
        <div className={SidebarStyle.titleContainer}>
          <h1 className={SidebarStyle.title} style={{display: isOpen ? "" : "none"}}>Monify.io</h1>
          <div className={SidebarStyle.hamContainer}>
            <FaBars onClick={toggle} />
          </div>
        </div>
        <div className={SidebarStyle.sectionTitle}>
          <h3 className={SidebarStyle.title}>ACCOUNT</h3>
        </div>
        <div className={SidebarStyle.navsContainer}>
          {NavItems.account.map((data, index) => {
            return <NavComponents {...data} key={index} />;
          })}
        </div>
        <hr />
        <div className={SidebarStyle.sectionTitle}>
          <h3 className={SidebarStyle.title}>PRODUCT</h3>
        </div>
        <div className={SidebarStyle.navsContainer}>
          {NavItems.product.map((data, index) => {
            return <NavComponents {...data} key={index} />;
          })}
        </div>
        <hr />
        <div className={SidebarStyle.sectionTitle}>
          <h3 className={SidebarStyle.title}>ADMIN</h3>
        </div>
        <div className={SidebarStyle.navsContainer}>
          {NavItems.admin.map((data, index) => {
            return <NavComponents {...data} key={index} />;
          })}
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
}
