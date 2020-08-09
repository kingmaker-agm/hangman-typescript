import React from "react";

interface props {
  message: String;
  show?: boolean;
}

const SnackBar = ({ message, show }: props) => {
  return (
    <div className={`notification-container ${show ? "show" : ""}`}>
      <p>{message}</p>
    </div>
  );
};

export default SnackBar;
