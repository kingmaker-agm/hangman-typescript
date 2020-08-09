import React, { useState, useEffect, useCallback } from "react";

import Skeleton from "./Skeleton";
import WrongLetters from "./WrongLetters";
import Word from "./Word";
import NotificationSnackBar from "./SnackBar";
import Popup from "./Popup";

const GameWords = ["application", "programming", "interface", "wizard"];
const numWrongMovesAllowed = 6;

const GameContainer = () => {
  const [selectedWord, setSelectedWord] = useState(
    GameWords[Math.floor(Math.random() * GameWords.length)]
  );
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState<string[]>([]);
  const [wrongLetters, setWrongLetters] = useState<string[]>([]);
  const [showNotification, setShowNotification] = useState(false);

  const handleKeydown = useCallback(
    (e: KeyboardEvent) => {
      if (playable && e.keyCode >= 65 && e.keyCode <= 90) {
        const letter = e.key.toLowerCase();

        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter))
            setCorrectLetters([...correctLetters, letter]);
          else displayNotification();
        } else {
          if (!wrongLetters.includes(letter))
            setWrongLetters([...wrongLetters, letter]);
          else displayNotification();
        }
      }
    },
    [correctLetters, playable, selectedWord, wrongLetters]
  );

  const displayNotification = () => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };

  const wasGameSuccessfull = () => {
    return wrongLetters.length <= numWrongMovesAllowed;
  };

  const resetGame = () => {
    setCorrectLetters([]);
    setWrongLetters([]);
    setSelectedWord(GameWords[Math.floor(Math.random() * GameWords.length)]);
    setPlayable(true);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [handleKeydown]);

  useEffect(() => {
    if (
      wrongLetters.length > numWrongMovesAllowed ||
      selectedWord.split("").every((letter) => correctLetters.includes(letter))
    ) {
      setPlayable(false);
    }
  }, [wrongLetters, correctLetters, selectedWord]);

  return (
    <div className="game-container">
      <Skeleton partsToDisplay={wrongLetters.length} />
      <WrongLetters letters={wrongLetters} />
      <Word word={selectedWord} correctLetters={correctLetters} />
      {!playable && (
        <Popup
          title={
            wasGameSuccessfull()
              ? "Congratulations! You won! 😃"
              : "Unfortunately you lost. 😕"
          }
          message={
            wasGameSuccessfull() ? "" : `...the word was: ${selectedWord}`
          }
          buttonText="Play Again"
          onButtonClick={resetGame}
        />
      )}
      {showNotification && (
        <NotificationSnackBar
          message="You have already entered this letter"
          show={showNotification}
        />
      )}
    </div>
  );
};

export default GameContainer;
