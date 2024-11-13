import React from 'react';
import StatsItem from './StatsItem';
import { BsTrash3 } from "react-icons/bs";

export default function Stats() {
    const statsData = [
        { 
            value: "207,000,000",
            description: "pounds of debris cleaned by Waves"
        }
    ];
    
    return (
        <div className='flex flex-col items-center bg-blue-700 p-5'>
            {statsData.map((item, index) => (
                <div className='flex items-center mb-4' key={index}>
                    <BsTrash3 size={38} className='mr-2'/>
                    <StatsItem
                        value={item.value}
                        description={item.description}
                    />
                </div>
            ))}
        </div>
    );
}
