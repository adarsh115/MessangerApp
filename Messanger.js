import React from "react";
import Chat from "./Chat";
import "./Messanger.css";
import Sidebar from "./Sidebar";

function Messanger() {
  return (
    <div className="messenger">
      {/* Sidebar Component */}
      <Sidebar />

      {/* Chat Component */}
      <Chat />
    </div>
  );
}

export default Messanger;
