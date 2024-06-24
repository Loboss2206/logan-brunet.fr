import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {

  function isMobile() {
    const userAgent = navigator.userAgent;
    const mobileDevices = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i
    ];

    for (let i = 0; i < mobileDevices.length; i++) {
      console.log(userAgent);
      if (mobileDevices[i].test(userAgent)) {
        return true;
      }
    }

    return false;
  }

  const backgroundClassName = `${isMobile() ? 'bg-[url("assets/phone-white-wallpaper.jpg")] dark:bg-[url("assets/phone-dark-wallpaper.jpg")] bg-left-top bg-repeat bg-fixed' : 'bg-[url("assets/white-wallpaper.jpg")] dark:bg-[url("assets/dark-wallpaper.jpg")] bg-cover bg-fixed bg-center'}`;

  return (
    <Router>
      <div className={backgroundClassName}>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
