// AlertButton.js
import React from 'react';
import './styles.css'; 

function AlertButton({ message = 'No message available', children = 'Click Me' }) {
  // Function to display the alert
  const showAlert = () => {
    if (message) {
      alert(message);
    } else {
      alert('No message available');
    }
  };

  return (
    <button className="alert-button" onClick={showAlert}>
      {children || 'Button not available'}
    </button>
  );
}

export default AlertButton;
