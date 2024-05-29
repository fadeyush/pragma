"use client"
import { useSession } from 'next-auth/react';
import React from 'react';

const Tasklist = () => {
    const session = useSession()
    console.log(session)
    return (
        <div>
            ffff
        </div>
    );
};

export default Tasklist;