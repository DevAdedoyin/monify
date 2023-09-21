import React, { useState } from "react";
import NavStyles from "./NavComponents.module.css";

type Props = { name: string; icon: string; id: number; isOpen: boolean };

function NavComponent({ name, icon, id, isOpen }: Props) {
  const [pressed, setPressed] = useState(0);

  const pressHandler = (index: number) => {
    setPressed(() => (index));
    console.log(pressed);
  };
  return (
    <div
      className={
        isOpen ? NavStyles.navItemContainer : NavStyles.navItemContainerClosed
      }
      onClick={() => pressHandler(id)}
    >
      <img
        src={icon}
        alt=""
        className={isOpen ? NavStyles.navIcon : NavStyles.navIconClosed}
      />
      <p
        className={isOpen ? NavStyles.navTitle : NavStyles.navTitleClosed}
        style={{ color: id === pressed ? "white" : "grey" }}
      >
        {name}
      </p>
    </div>
  );
}

export default NavComponent;
