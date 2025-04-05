'use client'
import React, { useState } from 'react';
import { singenoticetype } from '@/lib/notice/Notice';

export const SingleNotice: React.FC<singenoticetype> = (item) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const isNew = (date: Date) => {
        const now = new Date();
        const diffInTime = now.getTime() - date.getTime();
        const diffInDays = diffInTime / (1000 * 3600 * 24);
        return diffInDays <= 7;
    };

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    const shortDesc = item.desc.slice(0, 150);

    return (
        <div className="bg-gray-100 p-4 rounded-lg shadow relative">
            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                {item.title}
                {isNew(item.date) && (
                    <span className="bg-red-500 text-white text-sm px-2 py-0.5 font-normal rounded-full animate-pulse">
                        ⨀ new
                    </span>
                )}
            </h2>

            <p className="text-gray-700 mt-1 whitespace-pre-line transition-all duration-300">
                {isExpanded ? item.desc : `${shortDesc}...`}
            </p>

            {/* Only show toggle if the text is long */}
            {item.desc.length > 150 && (
                <button
                    onClick={toggleExpanded}
                    className="text-blue-600 text-sm mt-1 hover:underline"
                >
                    {isExpanded ? 'Show less' : 'See more'}
                </button>
            )}

            <p className="text-sm text-gray-500 mt-2">
                Published on: {item.date.toLocaleDateString()}
            </p>
        </div>
    );
};
