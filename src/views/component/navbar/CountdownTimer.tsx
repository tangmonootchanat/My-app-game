import React, { useState } from 'react';
import useCountdown from '../UseCountdown';

function CountdownTimer() {
  const [isGameWin, setIsGameWin] = useState(false);
  const timeLeft = useCountdown(1 * 60, isGameWin); // Start time of 1 minute

  // Convert time to text format 00:00
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  return (
    <div>
      <p>{formatTime(timeLeft)}</p>
    </div>
  );
}

export default CountdownTimer;
