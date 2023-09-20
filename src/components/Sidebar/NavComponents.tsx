import React from "react";
import NavStyles from "./NavComponents.module.css";

type Props = { name: string; icon: string; path: string; isOpen: boolean };

function NavComponent({ name, icon, path, isOpen }: Props) {
  return (
    <div className={NavStyles.navItemContainer}>
      <img
        src={icon}
        alt=""
        className={NavStyles.navIcon}
        style={{ marginRight: isOpen ? "1rem" : "auto" }}
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
