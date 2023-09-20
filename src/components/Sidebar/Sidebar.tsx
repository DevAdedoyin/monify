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
        className={
          isOpen
            ? SidebarStyle.sideNavContainer
            : SidebarStyle.sideNavContainerClosed
        }
      >
        <div className={SidebarStyle.titleContainer}>
          <h1
            className={SidebarStyle.title}
            style={{ display: isOpen ? "" : "none" }}
          >
            Monify.io
          </h1>
          <FaBars onClick={toggle} style={{ margin: isOpen ? "" : "auto" }} />
        </div>
        <div className={SidebarStyle.sectionTitleContainer}>
          <h3
            className={
              isOpen
                ? SidebarStyle.sectionTitle
                : SidebarStyle.sectionTitleClosed
            }
          >
            ACCOUNT
          </h3>
        </div>
        <div
          className={
            isOpen
              ? SidebarStyle.navsContainer
              : SidebarStyle.navsContainerClosed
          }
        >
          {NavItems.account.map((data, index) => {
            return <NavComponents {...data} key={index} isOpen={isOpen} />;
          })}
        </div>
        <hr style={{ display: isOpen ? "" : "none" }} />
        <div className={SidebarStyle.sectionTitleContainer}>
          <h3
            className={
              isOpen
                ? SidebarStyle.sectionTitle
                : SidebarStyle.sectionTitleClosed
            }
          >
            PRODUCT
          </h3>
        </div>
        <div
          className={
            isOpen
              ? SidebarStyle.navsContainer
              : SidebarStyle.navsContainerClosed
          }
        >
          {NavItems.product.map((data, index) => {
            return <NavComponents {...data} key={index} isOpen={isOpen} />;
          })}
        </div>
        <hr style={{ display: isOpen ? "" : "none" }} />
        <div className={SidebarStyle.sectionTitleContainer}>
          <h3
            className={
              isOpen
                ? SidebarStyle.sectionTitle
                : SidebarStyle.sectionTitleClosed
            }
          >
            ADMIN
          </h3>
        </div>
        <div
          className={
            isOpen
              ? SidebarStyle.navsContainer
              : SidebarStyle.navsContainerClosed
          }
        >
          {NavItems.admin.map((data, index) => {
            return <NavComponents {...data} key={index} isOpen={isOpen} />;
          })}
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
}
