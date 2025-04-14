"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
    const router = useRouter();
    const [showModal, setShowModal] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("token");
        router.replace("/");
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
            <button
                className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-700 transition"
                onClick={() => setShowModal(true)}
            >
                Log Out
            </button>
            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-transparent border bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className=" rounded-xl p-6 w-[90%] max-w-md shadow-lg relative">
                        <h2 className="text-xl font-semibold mb-4 text-gray-800">Confirm Logout</h2>
                        <p className="text-gray-600 mb-6">Are you sure you want to log out?</p>
                        <div className="flex justify-end gap-3">
                            <button
                                className="px-4 py-2 rounded-md bg-white hover:bg-gray-300 text-gray-700 transition"
                                onClick={() => setShowModal(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="px-4 py-2 rounded-md bg-red-500 hover:bg-red-600 text-white transition"
                                onClick={handleLogout}
                            >
                                Log Out
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

