import React, { useEffect, useState } from 'react';
import './style.css';

const Wordbox = ({ word, onFinish }) => {
  const [lettersLeft, setLettersLeft] = useState(word);  

  const handleKeyUp = (e) => {
    if (lettersLeft.charAt(0) === e.key) {
      setLettersLeft(prevState => prevState.substring(1));
    } else if (lettersLeft === e.key) {
      onFinish();
    }
  };

  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp);
    return () => document.removeEventListener('keyup', handleKeyUp);
  }, [lettersLeft]);
  
  return (
    <div className="wordbox">{lettersLeft}</div>
  );
};

export default Wordbox;
