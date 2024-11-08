import React from 'react';
import MenuIcon from './MenuIcon';
import { CiBellOn } from "react-icons/ci";
import SearchInput from './SearchInput';

export default function Navbar() {
    return (
        <header className='h-16 flex justify-between md:justify-end items-center gap-4 px-4 '>
           <div className='mr-[22rem] flex justify-between mt-8'>
             {/* Company Name */}
             <h1 className="border-gray-400 font-bold text-4xl mt-2 mr-6 text-blue-900">WAVES</h1>
             <SearchInput />
           </div>
            {/* Links next to hamburger menu */}
            <div className='flex gap-4 mt-8'>
                <button className='bg-blue-800 text-[1rem] text-white p-[0.50rem] rounded line-height hover:underline cursor-pointer flex items-center'>
                    <CiBellOn className='mr-1'/>  News
                </button> 
                {/* Gift */}
                <button className='bg-blue-800 text-[1rem] text-white p-[0.50rem] rounded line-height hover:underline cursor-pointer'>
                    Gift the Ocean
                </button>
            </div>
            {/* Hamburger Icon */}
            <MenuIcon />
        </header>
    );
};
