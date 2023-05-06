import { redisDataBase } from '@/workZone/database/db';
import React from 'react'

const About: React.FC = () => {



    const handlefunction = async () => {
        const a = await redisDataBase.set("hello", "world");
        console.log("functin db connection:", a);
    };
    handlefunction();

    return (
        <div>
            <h1 className='text-4xl text-red-600'>tttttttttttttttttt</h1>
        </div>
    )
}

export default About