"use client";
import { useRouter } from "next/navigation";

interface User {
    userId: number;
    username: string;
}

export default function Dashboard() {
    const router = useRouter();

    const Logout = () => {
        localStorage.removeItem('token')
        router.replace('/')
    }

    return (
        <div>
            <h1>Dasgboard</h1>
            <button
                className="cursor-pointer"
                onClick={Logout}
            >
                Log Out
            </button>
        </div>
    );
}
