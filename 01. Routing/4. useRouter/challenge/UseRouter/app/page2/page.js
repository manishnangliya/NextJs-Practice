'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const page2 = () => {
    const navigate = useRouter();
    return (
        <div>
            this is page2 <br />
            <button className='border px-2 py-1 bg-slate-300' onClick={() => {
                navigate.push('page1');
            }}>Navigate to page1</button>
        </div>
    )
}

export default page2
