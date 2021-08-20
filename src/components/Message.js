import React from "react";

const Message = ({ msg, bgColor }) => {
  let styles = {
    padding: "1rem",
    marginTop: "1rem",
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: bgColor,
  };

  return (
    <div style={styles}>
      {/* <p>{msg}</p> */}
      <p dangerouslySetInnerHTML={{ __html: msg }} />
    </div>
  );
};

export default Message;
