import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import '../styles/HeroSection.css'; // Import the CSS file

const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVhgDmzNk3851sbsFTKBUPNO5-xKIsuYo_tQ&s",
  "https://wallpapercave.com/wp/wp2809468.jpg", 
  "https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg",
  "https://storage.googleapis.com/a1aa/image/OT2v4DYRZ-ePY6sz97srpubtlt55LtCDKPfdawr6LSQ.jpg",
  "https://storage.googleapis.com/a1aa/image/snS2ZsyIFYzgG25tlH8vURBJHwPFiCQA1wbS_a3gSnQ.jpg",
  "https://storage.googleapis.com/a1aa/image/bMYZeCGU7yhKHCoCgB0mWSarWmoUMp38-B5mdW3Oo_0.jpg",
  "https://storage.googleapis.com/a1aa/image/GJecwknzbe7SjJwTGPn-ouk5xp2yNIuGMmcOu701laQ.jpg",
  "https://storage.googleapis.com/a1aa/image/n78fd4l_SValusNChC7cWWkRQjivZxQy_Awnyf6dwuU.jpg",
  "https://storage.googleapis.com/a1aa/image/hgY8CVZNCfpcrAJ5MrawJeNZoUv_12MM8VrqdzUPXGs.jpg",
  "https://storage.googleapis.com/a1aa/image/NT_OCDqNLOmGpBh6gIMV4WMZGEi8Cw4Ac0wcXojXu8I.jpg",
  "https://storage.googleapis.com/a1aa/image/YIEFip1xQikvEooWhwuOv2F9DD08mUOksufHNStgIXw.jpg",
  "https://storage.googleapis.com/a1aa/image/ihQnEdiu3mJ3uns_tejmZVQSJXHoy4lLmUtNXZpx8NY.jpg",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    console.log("Slideshow running...");
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-container">
      {/* Background Image */}
      <div className="hero-background">
        <img
          src={images[index]}
          alt="Background"
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </div>

      {/* Content Overlay */}
      <div className="hero-content">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to CLUB EVENTS
        </motion.h1>
        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Discover the best content and connect with amazing people.
        </motion.p>
      </div>

      {/* Dots Navigation */}
      <div className="hero-dots">
        {images.map((_, i) => (
          <div
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          ></div>
        ))}
      </div>
    </section>
  );
}
