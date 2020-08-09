import React from "react";

import Skeleton from "./Skeleton";
import WrongLetters from "./WrongLetters";
import Word from "./Word";
import PopupMessage from "./Popup";
import NotificationSnackBar from "./SnackBar";

const GameContainer = () => {
  return (
    <div className="game-container">
      <Skeleton />
      <WrongLetters />
      <Word />
      <PopupMessage />
      <NotificationSnackBar />
    </div>
  );
};

export default GameContainer;
