import React from "react";
import DHStyle from "./DashboardHeader.module.css";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
// import SearchIcon from "@material-ui/icons-material/Search";
import { FaSearch } from "react-icons/fa";

// type Props = {}

function DashboardHeader() {
  return (
    <div className={DHStyle.headerContainer}>
      <div className={DHStyle.inputContainer}>
        <Input
          placeholder="Search Anything"
          // variant="outlined"
          className={DHStyle.input}
          endAdornment={
            <InputAdornment position="start">
              <FaSearch className={DHStyle.searchIcon} />
            </InputAdornment>
          }
          style={{color: "white", fontSize: "0.7rem"}}
          disableUnderline={true}
        />
      </div>
      <div className={DHStyle.headerDetailsContainer}></div>
    </div>
  );
}

export default DashboardHeader;
