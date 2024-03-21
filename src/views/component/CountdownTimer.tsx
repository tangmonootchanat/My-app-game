// CountdownTimer.tsx
import React from 'react';
import useCountdown from './UseCountdown';

function CountdownTimer() {
  const timeLeft = useCountdown(3 * 60); // เวลาเริ่มต้น 3 นาที

  // แปลงเวลาให้อยู่ในรูปข้อความ 00:00
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
