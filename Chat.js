import React, { useState } from "react";
import "./Chat.css";

function Chat() {
  const [input, setinput] = useState("hellow");

  const handleMessage = (e) => {
    e.preventDefault();
    setinput("");
  };
  return (
    <div className="chat">
      {/* chat header */}
      <div className="chat__header">
        <h4>
          To: <span className="chat__name">Channel Name</span>
        </h4>
        <strong>Details</strong>
      </div>

      {/* chat messages */}
      <h2>I am a message</h2>

      {/* chat input */}
      <div className="chat__input">
        <form action="text">
          <input
            value={input}
            onChange={(e) => setinput(e.target.value)}
            type="text"
            placeholder="Message"
          />
          <button onClick={handleMessage}></button>
        </form>

        <div className="chat__speak">🎙️</div>
      </div>
    </div>
  );
}

export default Chat;
