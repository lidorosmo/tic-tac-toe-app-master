import React from "react";

const Messages = ({ moves }) => {
  return (
    <div className="messages">
      <ul>{moves}</ul>
    </div>
  );
};

export default Messages;
