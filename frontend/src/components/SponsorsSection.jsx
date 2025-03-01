import React from 'react';
import '../styles/SponsorsSection.css';

const sponsors = [
  { id: 1, name: 'CCC', icon: '/src/images/ccclogo.png' },
  { id: 2, name: 'Astro', icon: '/src/images/image.png' },
  { id: 3, name: 'COSC', icon: '/src/images/cosc.png' },
  { id: 4, name: 'Pinia', icon: '/src/images/satarc.png' },
  { id: 5, name: 'Nitro', icon: '/src/images/ccclogo.png' },
  { id: 6, name: 'Vue.js', icon: '/src/images/satarc.png' },
  { id: 7, name: 'Vite', icon: '/src/images/cosc.png' },
  { id: 8, name: 'Storefront UI', icon: '/src/images/html.png' },
  { id: 9, name: 'Nuxt', icon: '/src/images/docker.png' },
];

const SponsorsSection = () => {
  return (
    <div className="sponsors-section">
        <p></p>
      <div className="marquee">
        {/* First set of sponsors */}
        <div className="marquee-content">
          {sponsors.map((sponsor) => (
            <div key={sponsor.id} className="sponsor-item">
              <img src={sponsor.icon} alt={sponsor.name} className="sponsor-icon" />
              <p>{sponsor.name}</p>
            </div>
          ))}
        </div>
        {/* Duplicate set of sponsors for seamless looping */}
        <div className="marquee-content">
          {sponsors.map((sponsor) => (
            <div key={sponsor.id} className="sponsor-item">
              <img src={sponsor.icon} alt={sponsor.name} className="sponsor-icon" />
              <p>{sponsor.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorsSection;
