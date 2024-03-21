import React, { useState, useEffect } from 'react';

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(3 * 60); // เวลาในหน่วยวินาที
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTimeLeft => {
        if (prevTimeLeft === 1) {
          clearInterval(timer); // หยุด setInterval เมื่อครบ 3 นาที
        }
        return prevTimeLeft - 1;
      });
    }, 1000);

    // คืนฟังก์ชันเมื่อ component ถูก unmount เพื่อป้องกันการรัน setInterval ที่ไม่จำเป็น
    return () => clearInterval(timer);
  }, []);

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
