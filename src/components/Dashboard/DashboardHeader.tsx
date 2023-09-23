import React from "react";
import DHStyle from "./DashboardHeader.module.css";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import { FaSearch } from "react-icons/fa";
import Badge from "react-badger";

function DashboardHeader() {
  return (
    <div className={DHStyle.headerContainer}>
      <div className={DHStyle.inputContainer}>
        <Input
          placeholder="Search Anything..."
          // variant="outlined"
          className={DHStyle.input}
          endAdornment={
            <InputAdornment position="start">
              <FaSearch className={DHStyle.searchIcon} />
            </InputAdornment>
          }
          style={{ color: "white", fontSize: "0.7rem" }}
          disableUnderline={true}
        />
      </div>
      <div className={DHStyle.headerDetailsContainer}>
        <div className={DHStyle.notificationStyle}>{/* <Badge /> */}</div>
        <div>{/* <p>EN</p> */}</div>
        <div className={DHStyle.vr}></div>
        <div className={DHStyle.usernameContainer}>
          <p className={DHStyle.username}>Adedoyin Idris</p>
          <p className={DHStyle.rank}>Super Admin</p>
        </div>
        <div className={DHStyle.profilePicContainer}>
          <p className={DHStyle.userInitials}>AI</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader;
