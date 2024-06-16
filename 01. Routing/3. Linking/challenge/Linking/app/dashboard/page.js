import Link from 'next/link'
import React from 'react'

const Dashoboard = () => {
    return (
        <div>
            <Link href={'/home'}>Home</Link> <br/>
            <Link href={'/'}>Main home</Link>
        </div>
    )
}

export default Dashoboard
