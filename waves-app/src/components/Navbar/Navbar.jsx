import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';
// import { MenuIcon, XIcon } from '@heroicons/react/20/solid';

// List of links
// const links = [
//     { name: 'Home', url:'#' },
//     { name: 'About', url:'#' },
// ];

function NavBar({ darkTheme, setIsDarkTheme }) {
    // const [isNavOpen, setIsNavOpen] = useState(false);
    // Arrow function to set the menu to open
    // const toggleHamMenu = () => {
    //     setIsNavOpen(!isNavOpen);
    // }

    return (
        <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200 ">
            <div className='flex justify-between items-center space-x-5 w-screen'>
                <Link to='/'>
                    <p className='text-2xl bg-cyan-500 text-blue-700 font-bold py-1 px-2 rounded dark:bg-cyan-900 dark:text-blue-300'>
                        Waves
                    </p>
                </Link>
                {/* Button */}
                <button 
                    type="button" 
                    onClick={() => setIsDarkTheme(!darkTheme)}
                    className="text-xl dark:bg-cyan-900 dark:text-blue-300 bg-cyan-500 border-cyan-400 rounded px-2 py-1"
                >
                    { darkTheme ? '💡' : '🌙 '}
                </button>
            </div>
            {/* Search Feature */}
            <Search />
        </div>
    );
}

export default NavBar;