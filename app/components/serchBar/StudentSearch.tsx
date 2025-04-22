// components/serchBar/StudentSearch.tsx
'use client'

import React from 'react'

interface StudentSearchProps {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
}

const StudentSearch: React.FC<StudentSearchProps> = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className='max-w-[1200px] mx-auto my-6'>
            <label>Search...</label>
            <input
                type='text'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder='Search by UserRole/ Name / Username / Semester / Email / Phone'
                className='w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300'
            />
        </div>
    )
}

export default StudentSearch
