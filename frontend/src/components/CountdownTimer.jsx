import React, { useState, useEffect } from 'react';
import '../styles/CountdownTimer.css';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const targetDate = new Date('2025-03-04T00:00:00');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="countdown-container">
      {/* Top-left Countdown */}
      <div className="top-left-countdown">
        <p>Starting in</p>
        <span>
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </span>
      </div>

      {/* Central Countdown Design */}
      <div className="central-countdown">
        <h2>🚀 SUDHEE 2K25 Starts In:</h2>
        <div className="countdown-timer">
          <div className="time-box">
            <h2>{timeLeft.days}</h2>
            <p>Days</p>
          </div>
          <div className="time-box">
            <h2>{timeLeft.hours}</h2>
            <p>Hours</p>
          </div>
          <div className="time-box">
            <h2>{timeLeft.minutes}</h2>
            <p>Minutes</p>
          </div>
          <div className="time-box">
            <h2>{timeLeft.seconds}</h2>
            <p>Seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
