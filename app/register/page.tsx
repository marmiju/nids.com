'use client'
import { useAuth } from '@/utils/auth'
import Link from 'next/link'
import React, { useState } from 'react'
import dotenv from 'dotenv'
import toast, { Toaster } from 'react-hot-toast'
dotenv.config()

export default function RegisterPage() {
    const isloged = useAuth(); // is auth

    // State variables
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [error, setError] = useState("");
    const [role, setRole] = useState("guest")
    const [semester, setSemester] = useState('1st semester')



    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError("");

        if (password.length < 6) {
            setError('Password must be at least 6 characters long.');
            return;
        }

        if (password !== cpassword) {
            setError('Passwords do not match.');
            return;
        }


        const user = { name, username, email, phone, password, role, semester }
        console.log(user)

        // handle register
        const handleRegister = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_END_POINT}/register`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(user)
                })

                const data = await response.json();
                console.log("Response:", data);

                if (response.ok) {
                    toast.success('Register Successfully');
                } else {
                    toast.error(` ${data.message}`);
                }
            } catch (error) {
                console.error("Error:", error);
                toast.error("Something went wrong");
            }
        };
        handleRegister()
    };

    return (
        <div className='grid w-full justify-center items-center h-screen'>
            {isloged ? (
                <div className='text-center text-xl font-medium'>
                    Thanks! <br />You are already logged in.
                </div>
            ) : (
                <form onSubmit={onSubmit} className='bg-[#faf9f2] p-10 shadow border-gray-300 border rounded-2xl '>
                    <h1 className='text-center text-2xl font-bold'>Register Now</h1>
                    <div>
                        <div className='grid md:flex gap-4'>
                            <div className='grid'>
                                <label>Name</label>
                                <input type='text' onChange={e => setName(e.target.value)} required className='input-css' placeholder='Ex. Azizar Rahman' />
                            </div>
                            <div className='grid'>
                                <label>Username</label>
                                <input type='text' onChange={e => setUsername(e.target.value)} required className='input-css' placeholder='Ex. azizar360' />
                            </div>
                        </div>
                        <div className='grid'>
                            <label>Enter Your Email</label>
                            <input type='email' onChange={e => setEmail(e.target.value)} required className='input-css' placeholder='example@gmail.com' />
                        </div>
                        <div className='grid'>
                            <label>Phone</label>
                            <input type='tel' onChange={e => setPhone(e.target.value)} required className='input-css' placeholder='ex. 016****56' />
                        </div>
                        <div className='grid'>
                            <label>Password</label>
                            <input
                                type="password"
                                name="pass"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                                className={`input-css p-2 rounded border focus:outline-none transition-all duration-300
                                `}
                                placeholder="sgth#%&15236"
                            />
                            {error && <p className="text-red-500 text-end">{error}</p>}
                        </div>
                        <div className='grid'>
                            <label>Confirm Password</label>
                            <input type='password' onChange={e => setCpassword(e.target.value)} required className='input-css' placeholder='*******' />
                        </div>
                        {/* dropdown button */}
                        <div className='flex justify-between'>
                            <div className=' m-2'>

                                <select
                                    className="px-2 py-0.5   text-black bg-opacity-0 backdrop-blur-md  border-gray-300 border  rounded-md shadow-md "
                                    onChange={((e) => { setRole(e.target.value) })}>
                                    <option>guest</option>
                                    <option>student</option>
                                    <option>teacher</option>
                                </select>
                            </div>
                            <div className=' m-2'>
                                <select className="px-2 py-0.5   text-black bg-opacity-0 backdrop-blur-md  border-gray-300 border  rounded-md shadow-md"
                                    onChange={((e) => { setSemester(e.target.value) })}>
                                    <option>1st semester</option>
                                    <option>2nd semester</option>
                                    <option>3rd semester</option>
                                    <option>4th semester</option>
                                    <option>5th semester</option>
                                    <option>6th semester</option>
                                    <option>7th semester</option>
                                    <option>8th semester</option>
                                </select>

                            </div>
                        </div>

                    </div>
                    <div className='flex justify-center font-bold bg-black hover:bg-[#015551] rounded p-3 shadow text-[#FDFBEE] my-2 hover:cursor-pointer'>
                        <button type='submit' className='hover:cursor-pointer w-full'>Register</button>
                    </div>
                    <h1 className='text-center text-gray-600'>
                        Already have an account?
                        <Link href={'/login'} className='text-[#015551] rounded underline hover:cursor-pointer p-2'>Log in</Link>
                    </h1>
                    <div><Toaster reverseOrder={true} position='bottom-right' /></div>
                </form>

            )}



        </div>
    );
}
