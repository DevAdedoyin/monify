import React, { ReactNode } from "react";
import NavComponents from "./NavComponents";
import NavItems from "./NavItems";
import SidebarStyle from "./Sidebar.module.css";

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

export default function Sidebar({ children }: Props) {
  return (
    <div className={SidebarStyle.container}>
      <div className={SidebarStyle.sideNavContainer}>
        <div className={SidebarStyle.titleContainer}>
          <p className={SidebarStyle.title}>Monify.io</p>
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
