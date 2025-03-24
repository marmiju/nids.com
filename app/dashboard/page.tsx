"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface User {
    userId: number;
    username: string;
}

export default function Dashboard() {

    return (
        <div>
            <h1>Dasgboard</h1>
        </div>
    );
}
