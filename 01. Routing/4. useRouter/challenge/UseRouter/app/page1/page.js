'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const page1 = () => {
    const navigate = useRouter();
  return (
    <div>
      this is page1 <br/>
      <button className='border px-2 py-1 bg-slate-300' onClick={()=>{
        navigate.push('page2');
      }}>Navigate to page2</button>
    </div>
  )
}

export default page1
