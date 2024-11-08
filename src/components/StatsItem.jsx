import React from 'react';

export default function StatsItem({ value, description }) {
    return (
        <div className='flex flex-col items-end max-md:mb-1'>
           <span className='text-4xl text-white font-semibold'>{value}</span>
            <span className='text-xl text-white'>{description}</span>
        </div>
    );
}
