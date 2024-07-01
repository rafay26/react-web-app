import React from 'react';
import './GradientBackground.css'; // Import CSS for gradient background

const GradientBackground = ({ children }) => {
  return (
    <div className="gradient-background">
      {children}
    </div>
  );
};

export default GradientBackground;
