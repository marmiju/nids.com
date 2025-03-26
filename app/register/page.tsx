'use client'
import { useAuth } from '@/utils/auth'
import React from 'react'


export default function page() {
    const isloged = useAuth()
    return (
        <div className='grid w-full justify-center items-center h-screen'>
            {
                isloged ? <div className='text-center text-xl font-medium'>Thanks! <br />You Are Allrady Logge Logged In</div> : <form className='bg-[#FDFBEE] p-10 shadow border-gray-300 border rounded-2xl '>
                    <h1 className='text-center text-2xl font-bold m-4'>Register Now</h1>
                    <div>
                        <div className='grid md:flex gap-4'>
                            <div className='grid'>
                                <label>Name</label>
                                <input type='text' className='input-css' placeholder='Azizar rahman' />
                            </div>
                            <div className='grid'>
                                <label>Username</label>
                                <input type='text' className='input-css' placeholder='azizar360' />
                            </div>
                        </div>
                        <div className='grid'>
                            <label>Enter Your Email</label>
                            <input type='email' className='input-css' placeholder='example@gmail.com' />
                        </div>
                        <div className='grid'>
                            <label>Password</label>
                            <input type='password' className='input-css' placeholder='example@gmail.com' />
                        </div>
                        <div className='grid'>
                            <label>Confirm Password</label>
                            <input type='password' className='input-css' placeholder='example@gmail.com' />
                        </div>
                    </div>
                    <div className='flex justify-center font bold bg-black hover:bg-[#015551] rounded p-3 shadow text-[#FDFBEE] my-2 hover:cursor-pointer'>
                        <button type='submit' className='hover:cursor-pointer'>Register</button>
                    </div>
                    <h1 className='text-center text-gray-600'>I have Already an Account   <span className='text-[#015551] rounded underline hover:cursor-pointer p-2'>Log in</span></h1>


                </form>
            }

        </div>
    )
}
