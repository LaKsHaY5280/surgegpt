import React from 'react'
import './features.css'

const Features = ({ title, text }) => {
  return (
    <div className="gpt__feature-container__feature">
      <div className="gpt__feature-container__feature-title">
        <div>
          <h1>{title}</h1>
        </div>
        <div className="gpt__feature-container_feature-text">{text}</div>
      </div>
    </div>
  );
};

export default Features
