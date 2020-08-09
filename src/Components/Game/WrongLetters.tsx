import React from "react";

interface props {
  letters: String[];
}

const WrongLetters = ({ letters: wrongLetters }: props) => {
  return (
    <div className="wrong-letters-container">
      <div id="wrong-letters">
        {wrongLetters.length > 0 && (
          <>
            <p>Wrong</p>
            {wrongLetters.map((letter, i) => (
              <span key={i}>{letter}</span>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default WrongLetters;
