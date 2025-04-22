'use client'

import React, { useState } from 'react';
import { Problem } from "@/app/components/problem/Problem";
import { Contest } from '@/lib/contest/Contest';

interface Props {
    contest: Contest;
}

export const ContestTabs: React.FC<Props> = ({ contest }) => {
    const [activeTab, setActiveTab] = useState(0);
    const [codes, setCodes] = useState<{ [key: number]: string }>({});

    const handleCodeChange = (index: number, newCode: string) => {
        setCodes(prev => ({ ...prev, [index]: newCode }));
    };

    return (
        <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-4">
                <h1 className="text-2xl font-semibold">{contest.title}</h1>
                <p>{contest.description}</p>
                <p className="text-gray-400 text-sm">Gain 20 points per solved problem</p>
            </div>

            <div className="flex gap-2 mb-4 justify-center">
                {contest.problems.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`transition-colors duration-300 py-1 px-2 rounded 
                            ${activeTab === index ? 'bg-black text-white' : 'bg-gray-300 text-black'}
                        `}
                    >
                        {`P_${index + 1}`}
                    </button>
                ))}
            </div>

            <Problem
                problem={contest.problems[activeTab]}
                code={codes[activeTab] || ""}
                onCodeChange={(newCode) => handleCodeChange(activeTab, newCode)}
            />
        </div>
    );
};
