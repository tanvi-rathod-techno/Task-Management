import React, { useState, useEffect } from "react";
import "./TrafficSignal.css";

const TrafficSignal = () => {
  const signals = ["Signal 1", "Signal 2", "Signal 3", "Signal 4"];
  const [activeSignal, setActiveSignal] = useState(0);
  const signalTime = 3000;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSignal((prev) => (prev + 1) % signals.length);
    }, signalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="signal-container">
      {signals.map((signal, index) => (
        <div key={index} className={`signal ${activeSignal === index ? "active" : "inactive"}`}></div>
      ))}
    </div>
  );
};

export default TrafficSignal;
