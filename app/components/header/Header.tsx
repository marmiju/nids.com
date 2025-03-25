import Link from 'next/link'
import React from 'react'

const header = () => {
    return (
        <div className='bg-amber-200'>
            <div className=' flex justify-between max-w-[1200px] mx-auto'>
                <h1>NIDS</h1>
                <div>
                    <Link href={'/login'}>LogIn</Link>
                </div>
            </div>
        </div>
    )
}

export default header