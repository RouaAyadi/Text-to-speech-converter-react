/* eslint-disable react/prop-types */

import { useState, useEffect } from 'react';
import './Play.css';

function Play(props) {
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [voices, setVoices] = useState([]);

  useEffect(() => {
    const handleVoicesChanged = () => {
      const voicesList = window.speechSynthesis.getVoices();
      setVoices(voicesList);
      if (voicesList.length > 0) {
        setSelectedVoice(voicesList[0]);
      }
    };
    window.speechSynthesis.onvoiceschanged = handleVoicesChanged;
    handleVoicesChanged();
  }, []);

  const playHandler = () => {
    if (!props.text.trim()) return;
    const speech = new SpeechSynthesisUtterance(props.text);
    speech.voice = selectedVoice;
    window.speechSynthesis.speak(speech);
  };

  return (
    <div className='row'>
      <select onChange={(e) => setSelectedVoice(voices.find(v => v.name === e.target.value))}>
        {voices.map((v, index) => (
          <option key={index} value={v.name}>{v.name} ({v.lang})</option>
        ))}
      </select>
      <button onClick={playHandler}>Convert</button>
    </div>
  );
}

export default Play;
