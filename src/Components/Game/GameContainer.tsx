import React, { useState } from "react";

import Skeleton from "./Skeleton";
import WrongLetters from "./WrongLetters";
import Word from "./Word";
import PopupMessage from "./Popup";
import NotificationSnackBar from "./SnackBar";

const GameWords = ["application", "programming", "interface", "wizard"];

const GameContainer = () => {
  const [selectedWord, setSelectedWord] = useState(
    GameWords[Math.floor(Math.random() * GameWords.length)]
  );
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState<String[]>([]);
  const [wrongLetters, setWrongLetters] = useState<String[]>([]);

  return (
    <div className="game-container">
      <Skeleton />
      <WrongLetters letters={wrongLetters} />
      <Word word={selectedWord} correctLetters={correctLetters} />
      <PopupMessage />
      <NotificationSnackBar />
    </div>
  );
};

export default GameContainer;
