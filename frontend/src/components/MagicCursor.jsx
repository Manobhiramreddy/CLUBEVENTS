import React, { useEffect } from "react";
import "../styles/MagicCursor.css";

const MagicCursor = () => {
    useEffect(() => {
        const cursor = document.querySelector(".magic-cursor");
        const settingsIcon = document.querySelector(".settings-icon");
        const settingsPanel = document.querySelector(".settings-panel");
        const colorOptions = document.querySelectorAll(".color");

        // Update cursor position
        window.addEventListener("mousemove", (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        });

        // Toggle settings panel and rotate gear
        settingsIcon.addEventListener("click", () => {
            settingsPanel.classList.toggle("active");
            settingsIcon.classList.toggle("rotate"); // Add rotation class
        });

        // Change cursor color
        colorOptions.forEach((color) => {
            color.addEventListener("click", () => {
                const selectedColor = color.getAttribute("data-color");
                cursor.style.backgroundColor = selectedColor; // Update cursor color
                const outerRing = document.querySelector(".magic-cursor-ring");
                if (outerRing) {
                    outerRing.style.borderColor = selectedColor; // Update outer ring color
                }
            });
        });
    }, []);

    return (
        <>
            {/* Magic Cursor */}
            <div className="magic-cursor">
                <div className="magic-cursor-ring"></div>
            </div>

            {/* Settings Toggle */}
            <div className="settings-toggle">
                <div className="settings-icon">⚙️</div>
                <div className="settings-panel">
                    <h3>Unlimited Colors</h3>
                    <div className="color-options">
                        <div className="color" style={{ backgroundColor: "#ff0000" }} data-color="#ff0000"></div>
                        <div className="color" style={{ backgroundColor: "#00ff00" }} data-color="#00ff00"></div>
                        <div className="color" style={{ backgroundColor: "#0000ff" }} data-color="#0000ff"></div>
                        <div className="color" style={{ backgroundColor: "#ff00ff" }} data-color="#ff00ff"></div>
                        <div className="color" style={{ backgroundColor: "#ffa500" }} data-color="#ffa500"></div>
                        <div className="color" style={{ backgroundColor: "#008080" }} data-color="#008080"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MagicCursor;
