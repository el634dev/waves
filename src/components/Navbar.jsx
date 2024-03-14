import React from 'react';
import MenuIcon from './MenuIcon';

const Navbar = () => {
    return (
        <header className='h-16 flex justify-between md:justify-end items-center gap-4 px-4'>
            {/* Links next to hamburger menu */}
            <div className='flex gap-4'>
                <span className='text-black/[0.87] text-[15px] text-blue-300 line-height hover:underline cursor-pointer'>
                    Privacy
                </span>
                {/* Gift */}
                <span className='text-black/[0.87] text-[15px] text-blue-300 line-height hover:underline cursor-pointer'>
                    Gift the ocean
                </span>
            </div>
            {/* Hamburger Icon */}
            <MenuIcon />
        </header>
    );
};

export default Navbar;
