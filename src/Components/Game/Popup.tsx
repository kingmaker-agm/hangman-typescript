import React from "react";

interface props {
  title: String;
  message: String;
  buttonText: String;
  onButtonClick: () => void;
}

const Popup = ({ title, message, buttonText, onButtonClick }: props) => {
  return (
    <div className="popup-container">
      <div className="popup">
        <h2>{title}</h2>
        <h3>{message}</h3>
        <button onClick={onButtonClick}>{buttonText}</button>
      </div>
    </div>
  );
};

export default Popup;
