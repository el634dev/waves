import React from 'react';
import StatsItem from './StatsItem';
import { BiMoneyWithdraw } from "react-icons/bi";

export default function Stats() {
    const statsData = [
        { 
            value: "80,000,000,000",
            description: "billion dollars donated by Waves Search"
        }
    ];
    
    return (
        <div className='flex flex-col items-center bg-blue-700 p-3'>
            {statsData.map((item, index) => (
                <div key={index}className='flex items-center mb-4 mt-1'>
                    <BiMoneyWithdraw size={37} className='mr-2'/>
                    <StatsItem
                        value={item.value}
                        description={item.description}
                    />
                </div>
            ))}
        </div>
    );
}
