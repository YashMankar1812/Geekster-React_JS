import React, { useEffect, useState } from 'react';

const TypingText = () => {
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const texts = ['Hello :)', 'I’m Yash Mankar', 'Coder','Tech Explorer','Creative Thinker'
  ,'UI/UX Designer','Innovator','Front-End Developer'];
  const typingDelay = 120;
  const erasingDelay = 150;
  const newTextDelay = 1000;

  useEffect(() => {
    let typingTimeout;
    let erasingTimeout;

    if (isTyping && charIndex < texts[index].length) {
      typingTimeout = setTimeout(() => {
        setCharIndex((prevCharIndex) => prevCharIndex + 1);
      }, typingDelay);
    } else if (!isTyping && charIndex > 0) {
      erasingTimeout = setTimeout(() => {
        setCharIndex((prevCharIndex) => prevCharIndex - 1);
      }, erasingDelay);
    } else if (isTyping && charIndex === texts[index].length) {
      setTimeout(() => setIsTyping(false), newTextDelay);
    } else if (!isTyping && charIndex === 0) {
      setIsTyping(true);
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(erasingTimeout);
    };
  }, [charIndex, isTyping, texts, index]);

  return (
    <div className="name-container text-center">
      <div className="text-container">
        <span id="text" className="text-4xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to to-blue-500 mx-9">
          {texts[index].substring(0, charIndex)}
        </span>
      </div>
    </div>
  );
};

export default TypingText
