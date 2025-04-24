'use client'

import { Problem as ProblemType } from '@/lib/contest/Contest';
import { runOnPiston } from '@/lib/Piston/Piston';
import { Editor } from '@monaco-editor/react';
import { error } from 'console';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

interface Props {
  problem: ProblemType;
  code: string;
  onCodeChange: (code: string) => void;
  expired: boolean;
  // output?: string;

  
}


const runtimeMap: { [lang: string]: string, } = {
  python: '3.10.0',
  c:      '10.2.0',
  cpp:    '10.2.0',
  java:   '15.0.2',
  javascript: '15.10.0',
  php:    '8.2.3',
};



export const Problem: React.FC<Props> = ({ problem, code, onCodeChange, expired }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [isLog, setisLog]   = useState<boolean>(true);
  const [language, setLanguage] = useState<string>('python');
  const [version, setVersion]   = useState(runtimeMap['python']);
 const [outputText, setOutputText] = useState<string>('result');
 const [error,setError] = useState<string>('')


  // console.log(problem)

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
    setError('')

    try {
      const response = await runOnPiston({
        language: language,
        version: version,
        files: [{ name: `main.${language}`, content: code }],
        stdin: problem.input || ''
      });
     
      if(response.run.stderr){
        // console.log(response.run.stderr);
        console.log(response.run.stderr)
        setError(response.run.stderr)
      }
      setOutputText(response.run.stdout)
    } catch (error) {
      setIsRunning(false)
      throw new Error('Something Went Wrong!')
    }

    setIsRunning(false);
  };
//   const runCode = async () => {
//   setIsRunning(true);

//   try {
//     const response = await runOnPiston({
//       language,
//       version,
//       files: [{ name: `main.${language}`, content: code }],
//       stdin: problem.input || ''
//     });

//     if (response.run.stderr) {
//       console.log(response.run.stderr);
//       onErrorChange?.(response.run.stderr);
//     } else {
//       onErrorChange?.('');
//     }

//     onOutputChange?.(response.run.stdout);
//   } catch (error) {
//     onErrorChange?.('Something went wrong!');
//   }

//   setIsRunning(false);
// };

  return (
    <div>
      

      <div className="p-4 rounded mb-4 grid grid-cols-1 lg:grid-cols-2">
        {/* Problem statement */}
        <div>
          <h2 className="text-xl font-semibold">{problem.title}</h2>
          
            <p className="text-gray-700 bg-gray-100 mr-2 p-2">
              {problem.description}
            </p>
            <div className=' mr-2 text-gray-800 my-10 space-y-4'>
              Input:
              <p className='bg-gray-900 p-2 text-gray-200 rounded'>{problem.input}</p>
              Output:
              <p className='bg-gray-900 p-2 text-gray-200 rounded'>{problem.output}</p>
              Your output:
              <p className='bg-gray-900 p-2 text-gray-200 rounded'>
  {error ? error : outputText}
</p>
            </div>
        </div>

        {/* Editor & controls */}
        <div className="bg-[#1f1f1f] p-2 space-y-2 rounded-xl">
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
                  className="shadow-sm transition-colors duration-500 hover:bg-red-500 bg-gray-600 text-white p-2 px-4 rounded-sm"
                >
                  ▷ Run
                </button>
                <button className="shadow-sm hover:bg-red-500 transition-colors duration-500 bg-green-200 p-2 px-4 rounded-sm">
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
