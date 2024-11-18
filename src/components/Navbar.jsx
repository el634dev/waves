import MenuIcon from './MenuIcon';
import React from 'react';
import { CiBellOn } from "react-icons/ci";
import SearchInput from './SearchInput';

export default function Navbar() {
    return (
        <header className='h-16 flex justify-between md:justify-end items-center gap-4 px-4'>
           <div className='mr-[22rem] flex justify-between mt-8'>
             {/* Company Name */}
             <h1 className="border-gray-400 font-semibold text-4xl mt-2 mr-6 text-blue-900">WAVES</h1>
             <SearchInput />
           </div>
            {/* Links next to hamburger menu */}
            <div className='flex gap-4 mt-8'>
                <button className='bg-blue-800 hover:bg-blue-700 text-[1rem] text-white p-[0.50rem] rounded line-height cursor-pointer flex items-center'>
                    <CiBellOn className='mr-1'/>  News
                </button> 
                {/* Gift */}
                <button className='bg-blue-800 hover:bg-blue-700 text-[1rem] text-white p-[0.50rem] rounded line-height cursor-pointer'>
                    Gift the Ocean
                </button>
            </div>
            {/* Hamburger Icon */}
           <div className='mt-7'>
             <MenuIcon />
           </div>
        </header>
    );
};
