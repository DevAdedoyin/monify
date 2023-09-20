import React from "react";
import NavStyles from "./NavComponents.module.css";

type Props = { name: string; icon: string; path: string; isOpen: boolean };

function NavComponent({ name, icon, path, isOpen }: Props) {
  return (
    <div
      className={
        isOpen ? NavStyles.navItemContainer : NavStyles.navItemContainerClosed
      }
    >
      <img
        src={icon}
        alt=""
        className={isOpen ? NavStyles.navIcon : NavStyles.navIconClosed}
      />
      <p
        className={NavStyles.navTitle}
        style={{ display: isOpen ? "" : "none" }}
      >
        {name}
      </p>
    </div>
  );
}

export default NavComponent;
