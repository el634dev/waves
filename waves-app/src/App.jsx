import React, { useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import NavBar from './components/Navbar/Navbar'
import Routes from './components/Routes/Routes'

function App() {
  // Check if dark theme is set
  const [darkTheme, setIsDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className='bg-cyan-500 dark:bg-cyan-900 dark:text-blue-300 min-h-screen'>
        {/* Passing in the darkThem and setIsDarkTheme to the NavBar component */}
        <NavBar darkTheme={darkTheme} setIsDarkTheme={setIsDarkTheme} />
        <Routes />
        <Footer />
      </div>
    </div>
  )
}

export default App;
