import React from 'react'

export const Loading = () => {
    return (
        <div className='flex w-full h-[500px] justify-center items-center'>
            <video autoPlay muted loop playsInline>
                <source src="/loading.webm" type="video/webm" />
            </video>


        </div>
    )
}
