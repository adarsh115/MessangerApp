import React from "react";
import "./SidebarChat.css";

const styleAvatar = {
  borderRadius: "50%",
  border: "2.5px solid black",
  textAlign: "center",

  padding: "0.3em 0.3em",

  cursor: "pointer",
  backgroundColor: "lightblue",
  fontSize: "1.4rem",
};

function SidebarChat() {
  return (
    <div className="sidebarchat">
      <span style={styleAvatar}>🐸</span>
      <div className="sidbarChat__info">
        <h3>Channel Name</h3>
        <p>Last message sent...</p>
        <small>timestamp</small>
      </div>
    </div>
  );
}

export default SidebarChat;
