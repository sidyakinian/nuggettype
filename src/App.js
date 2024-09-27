import logo from './logo.svg';
import './App.css';

import React, { useState } from "react";
import "./App.css";

const TypeRacer = () => {
  const [inputText, setInputText] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [completed, setCompleted] = useState(false);

  const targetText = "The quick brown fox jumps over the lazy dog.";

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputText(value);

    // start timer when user starts typing
    if (value.length === 1 && !startTime) {
      setStartTime(Date.now());
    }

    if (value === targetText) {
      setEndTime(Date.now());
      setCompleted(true);
    }
  };

  const calculateWPM = () => {
    const timeInMinutes = (endTime - startTime) / 60000;
    const numberOfWords = inputText.length / 5;
    return (numberOfWords / timeInMinutes).toFixed(2);
  };

  const generateDisplayText = () => {
    let correctPart = "";
    let incorrectPart = "";
    let unfinishedPart = "";

    for (let i = 0; i < targetText.length; i++) {
      const typedChar = inputText[i];

      if (typedChar === undefined) {
        unfinishedPart += targetText[i];
      } else if (typedChar === targetText[i] && incorrectPart === "") {
        correctPart += targetText[i];
      } else {
        incorrectPart += targetText[i];
      }
    }

    return (
      <>
        <span className="text-black">{correctPart}</span>
        <span className="text-red-500">{incorrectPart}</span>
        <span className="text-gray-400">{unfinishedPart}</span>
      </>
    );
  };

  if (completed) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-2xl p-4 text-center bg-gray-200 rounded-lg shadow-md">
          <h1 className="mb-4 text-2xl font-semibold text-gray-800">
            Typing Completed!
          </h1>
          <p className="text-xl">Your WPM: <strong>{calculateWPM()}</strong></p>
          <p className="text-xl">Time Taken: <strong>{((endTime - startTime) / 1000).toFixed(2)} seconds</strong></p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-full max-w-2xl p-4 bg-gray-200 rounded-lg shadow-md">
        <h1 className="mb-4 text-2xl font-semibold text-gray-800">TypeRacer</h1>
        <div className="relative">
          <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            className="relative z-10 w-full p-2 border-2 border-transparent bg-transparent text-xl font-mono focus:outline-none caret-transparent"
            autoComplete="off"
            spellCheck="false"
            style={{ color: 'transparent' }}
          />
          <div className="absolute inset-0 z-10 pointer-events-none p-2 text-xl font-mono">
            {generateDisplayText()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypeRacer;
