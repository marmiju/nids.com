import Link from 'next/link'
import React from 'react'

const header = () => {
    return (
        <div>
            <Link href={'/login'}>LogIn</Link>
        </div>
    )
}

export default header