import Link from 'next/link'
import React from 'react'

import { Mobile } from './Mobile';
import { Navlink } from '@/lib/Navlink';



const header = () => {
    const navlink = Navlink()
    return (
        <div className='m-4'>
            {/* for Mobile */}
            <Mobile />

            {/* for desktop or tablate */}
            <div className='  hidden md:flex justify-between max-w-[1200px] mx-auto'>
                <h1>NIDS</h1>
                <div>
                    <Navlink />
                </div>
            </div>
        </div>
    )
}

export default header