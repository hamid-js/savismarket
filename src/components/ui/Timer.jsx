import { useState, useEffect } from 'react';

const Timer = ({ expiryTime }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(expiryTime) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div className="flex w-full items-center justify-evenly border-b border-gray-700 pb-1">
      <div>
        {days} <div className="text-[10px]  text-gray-400">days</div>
      </div>
      <div>
        {hours}
        <div className="text-[10px]  text-gray-400">hours</div>
      </div>
      <div>
        {minutes}
        <div className="text-[10px]  text-gray-400">minutes</div>
      </div>
      <div>
        {seconds}
        <div className="text-[10px]  text-gray-400">seconds</div>
      </div>
    </div>
  );
};

export default Timer;
