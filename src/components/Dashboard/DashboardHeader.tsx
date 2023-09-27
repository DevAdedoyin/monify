import React from "react";
import DHStyle from "./DashboardHeader.module.css";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import Badge from "@material-ui/core/Badge";
import { FaSearch, FaBell } from "react-icons/fa";
// import Badge from "react-badger";

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
        <div
          className={DHStyle.notificationContainer}
          style={{ position: "relative" }}
        >
          <Badge badgeContent={4} variant="dot" color="secondary">
            <FaBell color="action" />
          </Badge>
        </div>
        <div className={DHStyle.langOptionContainer}>
          <select>
            <option>EN</option>
            <option>FR</option>
            <option>ES</option>
            <option>DE</option>
          </select>
        </div>
              <hr className={DHStyle.hr} />
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
