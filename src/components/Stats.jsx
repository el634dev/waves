import React from 'react';
import StatsItem from './StatsItem';
import { GiWaterBottle } from "react-icons/gi";

export default function Stats() {
    const statsData = [
        { 
            value: "207,000,000",
            description: "pounds of debris cleaned by Waves"
        }
    ]
    return (
        <section className='bg-blue-700 p-5'>
            <GiWaterBottle />
            {statsData.map((item, index) => (
                <StatsItem 
                    key={index}
                    value={item.value}
                    description={item.description}
                />
            ))}
        </section>
    );
}
