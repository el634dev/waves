import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from './Search';

function Navbar({ darkTheme, setDarkTheme }) {
    return (
        <div className='p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center dark:bg-cyan-900 border-cyan-900 dark:text-blue-200'>
            <div className='flex justify-between items-center space-x-5 w-screen'>
                <Link to="/">
                    <p className='text-2xl font-bold text-blue-200 py-1 px-2 dark:border-cyan-900 border-cyan-900 dark:text-blue-200'>
                        Waves
                    </p>
                </Link>
                <button 
                    type="button" 
                    onClick={() => setDarkTheme(!darkTheme)}
                    className='text-xl dark:border-cyan-900 border-cyan-900 dark:text-blue-200 rounded-full px-2 py-1'>
                    { darkTheme ? '💡' : '🌙 '}
                </button>
            </div>
            <Search />
        </div>
    );
}

export default Navbar;