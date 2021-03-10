import React from "react";
import {
  BusinessCenter,
  SupervisorAccount,
  Home,
  Search,
  Chat,
  Notifications,
} from "@material-ui/icons";
import HeaderOption from "./HeaderOption";
import "./Header.scss";

/**
 * Header Component is the navbar for our website, that containe Home, My Network ,Jobs.. buttons
 */
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
          alt="linkedIn-icon"
        />
        <div className="header__left__search">
          <Search />
          <input type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={Home} title="Home" />
        <HeaderOption Icon={SupervisorAccount} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Chat} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Notification" />
        <HeaderOption
          avatar="https://media-exp1.licdn.com/dms/image/C4D35AQHO-61aPlMFpA/profile-framedphoto-shrink_200_200/0/1614880986043?e=1615467600&v=beta&t=3Kt_tP236o2ah1mqIEEGT6UJSgVKsUAxPC_XEda8fPk"
          title="me"
        />
      </div>
    </div>
  );
}

export default Header;
