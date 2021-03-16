import React from "react";
import {
  BusinessCenter,
  SupervisorAccount,
  Home,
  Search,
  Chat,
  Notifications,
} from "@material-ui/icons";
import LinkedIn_Icon from "../../images/LinkedIn_Icon.svg";
import me from "../../images/me.jfif";
import HeaderOption from "./HeaderOption";
import "./Header.scss";

/**
 * Header Component is the navbar for our website, that containe Home, My Network ,Jobs.. buttons
 */
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src={LinkedIn_Icon} alt="linkedIn-icon" />
        <div className="header__left__search">
          <Search />
          <input placeholder="Search" type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={Home} title="Home" />
        <HeaderOption Icon={SupervisorAccount} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Chat} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Notification" />
        <HeaderOption avatar={me} title="me" />
      </div>
    </div>
  );
}

export default Header;
