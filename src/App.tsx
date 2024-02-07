import React from 'react';
import logo from './image-qr-code.png';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className='main'>
        <div className='logo-image'>
          <img src={logo} className='logo' alt="logo" />
        </div>
        <div className='main-content'>
          <p className='main-heading'>Improve your front-end skills by building projects</p>
          <p className='content'>Scan this QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      </div>
    </div>
  );
}

export default App;
