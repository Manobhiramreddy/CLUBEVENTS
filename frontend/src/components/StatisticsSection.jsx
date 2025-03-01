import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import '../styles/StatisticsSection.css';

const stats = [
  { id: 1, icon: '/src/images/attendees.svg', count: 8000, label: 'Attendees' },
  { id: 2, icon: '/src/images/attendees.svg', count: 250, label: 'International Speakers' },
  { id: 3, icon: '/src/images/attendees.svg', count: 75, label: 'Countries Represented' },
  { id: 4, icon: '/src/images/attendees.svg', count: 150, label: 'Exhibitors' },
  { id: 5, icon: '/src/images/attendees.svg', count: 200, label: 'Global Media' },
];

const StatisticsSection = () => {
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartCount(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    const section = document.querySelector('.statistics-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="statistics-section">
      {stats.map((stat) => (
        <div key={stat.id} className="stat-card">
          <img src={stat.icon} alt={stat.label} className="stat-icon" />
          <h3 className="stat-count">
            {startCount ? <CountUp end={stat.count} duration={2} /> : '0'}+
          </h3>
          <p className="stat-label">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatisticsSection;
