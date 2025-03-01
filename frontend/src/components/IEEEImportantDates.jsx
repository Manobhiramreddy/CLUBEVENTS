import React from "react";
import { motion, useInView } from "framer-motion";
import '../styles/IEEEImportantDates.css';
const dates = [
  { label: "Early Bird Registration Deadline", date: "5th February 2025" },
  { label: "Abstract Submission Deadline", date: "20th February 2025" },
  { label: "Full Paper Submission Deadline", date: "28th February 2025" },
  { label: "Registration Deadline", date: "4th March 2025" }
];

const ImportantDates = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="container">
      <motion.div 
        ref={ref}
        className="content"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="title">
          Important <span className="highlight">Dates</span>
        </h2>
        <div className="dates-grid">
          {dates.map((item, index) => (
            <motion.div 
              key={index} 
              className="date-card"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="top-bar"></div>
              <div className="icon-container">
                <img src="https://cdn-icons-png.flaticon.com/512/747/747310.png" alt="Calendar" className="icon" />
              </div>
              <div className="label">{item.label}</div>
              <div className="date">{item.date}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ImportantDates;
