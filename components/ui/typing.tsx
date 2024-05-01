"use client";
import { useState, useEffect } from "react";

const UseTypingSimulation = (words: string[]) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isReversing, setIsReversing] = useState(false);
  const [speed, setSpeed] = useState(500);
  useEffect(() => {
    const interval = setInterval(() => {
      if (isReversing) {
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        } else {
          setSpeed(500);
          setIsReversing(false);
          setCurrentIndex(currentIndex + 1);
        }
      } else {
        const word = words[currentIndex % words.length];
        if (currentText.length < word.length) {
          setCurrentText(word.substring(0, currentText.length + 1));
        } else {
          setSpeed(150);
          setIsReversing(true);
        }
      }
    }, speed);

    return () => clearInterval(interval);
  }, [currentText, currentIndex, isReversing, words, speed]);

  return currentText;
};

export default UseTypingSimulation;
