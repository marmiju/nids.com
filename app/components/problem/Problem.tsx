'use client'

import { Problem as ProblemType } from '@/lib/contest/Contest';
import { Editor } from '@monaco-editor/react';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

interface Props {
  problem: ProblemType;
  code: string;
  onCodeChange: (code: string) => void;
  expired: boolean;
}

const runtimeMap: { [lang: string]: string } = {
  python: '3.10.0',
  c:      '10.2.0',
  cpp:    '10.2.0',
  java:   '15.0.2',
  javascript: '15.10.0',
  php:    '8.2.3',
};

type runtimekey = keyof typeof runtimeMap

export const Problem: React.FC<Props> = ({ problem, code, onCodeChange, expired }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [isLog, setisLog]   = useState<boolean>(false);
  const [language, setLanguage] = useState<string>('python');
  const [version, setVersion]   = useState(runtimeMap['python']);

  // on mount check login
  useEffect(() => {
    setisLog(!!localStorage.getItem('token'));
  }, []);

  // when language changes, update version
  useEffect(() => {
    setVersion(runtimeMap[language]);
  }, [language]);

  const handleEditorChange = (value: string | undefined) => {
    if (value !== undefined) onCodeChange(value);
  };

 const handlecodeChenge =(e:React.ChangeEvent<HTMLSelectElement>)=>{
     const value = e.target.value
     setLanguage(value)
 }

  const runCode = async () => {
    setIsRunning(true);
    // call Piston API with { language, version, files: [...], stdin: ... }
    // ...
    setIsRunning(false);
  };

  return (
    <div>
      {expired 
        ? <p className="bg-red-600 text-center text-white p-4">
            Oops! Contest Ended😔<br/>
            <span className="text-gray-300">You can't Run Code</span>
          </p>
        : isRunning 
          ? 'Loading...' 
          : isLog 
            ? (
              <div className="flex justify-center gap-1">
                <button 
                  onClick={runCode} 
                  className="shadow-sm transition-colors duration-500 hover:bg-red-500 bg-gray-300 text-black p-2 px-4 rounded-sm"
                >
                  ▷ Run
                </button>
                <button className="shadow-sm hover:bg-red-500 transition-colors duration-500 bg-green-400 p-2 px-4 rounded-sm">
                  ⇮ Submit
                </button>
              </div>
            )
            : (
              <div className="w-full flex justify-center">
                <Link href="/login" className="text-center bg-yellow-400 w-full p-2">
                  Oops! You're Not Logged In!<br/>
                  Please Log In First
                </Link>
              </div>
            )
      }

      <div className="p-4 rounded mb-4 grid grid-cols-1 lg:grid-cols-2">
        {/* Problem statement */}
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
            <p className="text-gray-700 bg-gray-100 mr-2 p-2">
              {problem.description}
            </p>
          )}
        </div>

        {/* Editor & controls */}
        <div className="bg-[#1f1f1f] p-2 space-y-2 rounded-xl">
          <div className="flex items-center gap-2">
            <select
              className="text-white text-sm bg-[#1f1f1f] p-1 rounded"
              value={language}
              onChange={handlecodeChenge}
            >
              {Object.keys(runtimeMap).map(lang => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>

            <span className="text-gray-400 text-sm">
              v{version}
            </span>
          </div>

          <Editor
            height="60vh"
            theme="vs-dark"
            language={language}
            onChange={handleEditorChange}
            value={code}
          />
        </div>
      </div>
    </div>
  );
};
