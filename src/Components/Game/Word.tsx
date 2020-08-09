import React from "react";

interface props {
  word: String;
  correctLetters: String[];
}

const Word = ({ word, correctLetters }: props) => {
  return (
    <div className="word">
      {word.split("").map((letter, i) => (
        <span className="letter" key={i}>
          {correctLetters.includes(letter) ? letter : ""}
        </span>
      ))}
    </div>
  );
};

export default Word;
