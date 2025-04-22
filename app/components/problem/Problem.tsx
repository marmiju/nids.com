'use client'

import { Problem as ProblemType } from '@/lib/contest/Contest';
import { Editor } from '@monaco-editor/react';
import React, { useRef, useState } from 'react';

interface Props {
    problem: ProblemType;
    code: string;
    onCodeChange: (code: string) => void;
}

const languages = ['python', 'c', 'cpp', 'java', 'javascript', 'php'];

export const Problem: React.FC<Props> = ({ problem, code, onCodeChange }) => {
    const [isRunning, setIsRunning] = useState(false);
    const editorRef = useRef(null);

    function handleEditorChange(value: string | undefined) {
        if (value !== undefined) {
            onCodeChange(value);
        }
    }

    return (
        <div>
            {
                isRunning ? 'Loading...' : (
                    <div className='flex justify-center gap-4 flex-wrap'>
                        <button className='border-gray-400 border drop-shadow-2xl py-1 px-3 rounded-md hover:cursor-pointer hover:bg-gray-950 hover:text-white transition-colors duration-300'>Run</button>
                        <button className='bg-gray-800 rounded-md drop-shadow-2xl text-white py-1 px-3 hover:cursor-pointer hover:bg-gray-950 hover:text-white transition-colors duration-300'>Submit</button>
                    </div>
                )
            }
            <div className="p-4 rounded mb-4 grid grid-cols-1 lg:grid-cols-2">
                <div>
                    <h2 className="text-xl font-semibold">{problem.title}</h2>
                    {problem.description.includes('Example:') ? (
                        <>
                            <p className="text-gray-700 bg-gray-100 mr-2 p-2">
                                {problem.description.split('Example:')[0]}
                            </p>
                            <p className="text-gray-700 bg-gray-100 mr-2 p-2 font-mono">
                                <strong>Example:</strong> {problem.description.split('Example:')[1]}
                            </p>
                        </>
                    ) : (
                        <p className="text-gray-700 bg-gray-100 mr-2 p-2">{problem.description}</p>
                    )}
                </div>
                <div className='bg-[#1f1f1f] p-2 space-y-2 rounded-xl'>
                    <select className='text-white text-sm bg-[#1f1f1f]'>
                        {languages.map((lang) => (
                            <option key={lang} value={lang}>{lang}</option>
                        ))}
                    </select>
                    <Editor
                        height="60vh"
                        theme='vs-dark'
                        language='python'
                        onChange={handleEditorChange}
                        value={code}
                    />
                </div>
            </div>
        </div>
    );
};
