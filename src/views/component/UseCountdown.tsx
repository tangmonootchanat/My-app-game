// useCountdown.ts
import { useState, useEffect } from 'react';

function useCountdown(initialTime: number): number {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    // ตั้งค่า interval เมื่อ component mount
    const timerId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    // หากเวลาเหลือ 0 หรือ component unmount ให้เคลียร์ interval
    if (timeLeft === 0) {
      clearInterval(timerId);
    }

    return () => clearInterval(timerId);
  }, [timeLeft]);

  return timeLeft;
}

export default useCountdown;
