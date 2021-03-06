import React from "react";
import { Avatar } from "@material-ui/core";
import me from "../../images/me.jfif";
import "./SideBar.scss";

function SideBar() {
  const recentItem = (topic) => (
    <div className="recentItem">
      <span className="recentItem__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={me} alt="me" />
        <Avatar className="sidebar__top__avatar" />
        <h2>Raed Fadhlaoui</h2>
        <h4>fadhlaouiraied@hotmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stats__stat">
          <p>Who viewed you</p>
          <p className="sidebar__stats__stat__statNumber">999</p>
        </div>
        <div className="sidebar__stats__stat">
          <p>Views on post</p>
          <p className="sidebar__stats__stat__statNumber">999</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
      </div>
    </div>
  );
}

export default SideBar;
