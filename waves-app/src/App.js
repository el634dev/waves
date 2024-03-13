import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Routes from './components/Routes';
import Footer from './components/Footer';

export default function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className={darkTheme ? 'dark' : ''}>
       <div className='bg-cyan-600 dark:bg-cyan-900 dark:text-blue-200 min-h-screen'>
          <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
          <Routes />
          <Footer />
       </div>
    </div>
  )
}