'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function TypingAnimation({ words, speed = 50, pause = 5000 }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const typingSpeed = isDeleting ? speed / 2 : speed;

    const timer = setTimeout(() => {
      if (!isDeleting && typedText === currentWord) {
        setTimeout(() => setIsDeleting(true), pause);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      } else {
        const newText = isDeleting
          ? currentWord.slice(0, typedText.length - 1)
          : currentWord.slice(0, typedText.length + 1);
        setTypedText(newText);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, words, currentWordIndex, speed, pause]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-primary"
    >
      {typedText}
      <span className="animate-blink">|</span>
    </motion.span>
  );
}
