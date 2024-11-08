import React from 'react';
import StatsItem from './StatsItem';
import { GiWaterBottle } from "react-icons/gi";

export default function Stats() {
    const statsData = [
        { 
            value: "$80,000,000",
            description: "dedicated to marine preservation & climate action"
        }
    ]
    return (
        <section className='bg-blue-700 p-5'>
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
