"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import dotenv from 'dotenv'
import Link from "next/link";
dotenv.config()

export default function Login() {
    const [email, setemail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
       
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_END_POINT}/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });
            console.log(response)
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Login failed");
            }
            const { token } = await response.json();
            localStorage.setItem("token", token);
            router.replace('/profile')
            router.refresh()


        } catch (error: any) {
            setError(error.message);
        }
    };
    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className=" p-8 shadow-lg border border-gray-200 rounded-lg w-96">
                <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
                {error && <p className="text-red-500 text-center">{error}</p>}
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                            className="w-full p-2 border rounded mt-1"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 border rounded mt-1 "
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-black text-white p-2 rounded hover:bg-emerald-900"
                    >
                        Login
                    </button>
                </form>
                <h1 className='text-center mt-6 text-gray-600'>Oops! dan't have account don't Worry  <Link href={'register'} className='text-orange-700 rounded underline hover:cursor-pointer p-4'>Create New</Link></h1>
            </div>
        </div>
    );
}
