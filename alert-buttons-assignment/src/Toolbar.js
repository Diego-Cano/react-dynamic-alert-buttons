// Toolbar.js
import React from 'react';
import AlertButton from './AlertButton';
import './styles.css'; 

function Toolbar() {
  const buttons = [
    { message: 'Downloading!', children: 'Download File' },
    { message: 'Sharing!', children: 'Share Document' },
    { message: 'Sending Email!', children: 'Send Email' },
    { message: 'Opening Settings!', children: 'Open Settings' },
    { message: 'Signing Out!', children: 'Sign Out' },
  ];

  return (
    <div className="toolbar">
      {buttons.map((button, index) => (
        <AlertButton key={index} message={button.message}>
          {button.children}
        </AlertButton>
      ))}
    </div>
  );
}

export default Toolbar;
