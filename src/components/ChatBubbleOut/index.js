import React from "react";
import "./ChatBubbleOut.css";

function ChatBubbleOut({ message }) {
  return (
    <div className="ChatBubbleOut">
      <div className="ChatBubbleOut__message">{message}</div>
    </div>
  );
}

export default ChatBubbleOut;
