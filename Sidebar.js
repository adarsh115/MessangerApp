import React from "react";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <span className="sidebar__avatar">🐼</span>
        <div className="sidebar__input">
          🔍
          <input type="text" placeholder="search" />
        </div>
        <span
          style={{
            fontSize: "25px",
            border: "none",
            marginTop: "4px",
            cursor: "pointer",
          }}
        >
          📣
        </span>
      </div>
      <div className="sidebar__chats">
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
