'use client'
import { useState, useEffect } from "react";

export const useAuth = () => {
    const [isLogged, setIsLogged] = useState<boolean>(false);
    useEffect(() => {
        // Initial check
        const checkToken = () => {
            const token = localStorage.getItem("token");
            setIsLogged(!!token);
        };

        checkToken(); // Component mount এ check হবে

        // Listen for storage changes (যদি অন্য tab বা window থেকে change হয়)
        window.addEventListener("storage", checkToken);
        return () => {
            window.removeEventListener("storage", checkToken);
        };
    }, []);
    return isLogged;
};
