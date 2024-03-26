import { useState, useEffect } from 'react';

const useCountdown = (initialTime: number, isGameWin: boolean): number => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (!isGameWin && timeLeft > 0) {
      intervalId = setInterval(() => {
        setTimeLeft((prevTimeLeft) => (prevTimeLeft > 0 ? prevTimeLeft - 1 : 0));
      }, 1000);
    }

    return () => clearInterval(intervalId); // Cleanup the interval on unmount or game win
  }, [initialTime, isGameWin, timeLeft]);

  return timeLeft;
};

export default useCountdown;
