import { Problem as ProblemType } from '@/lib/contest/Contest';
import { Editor } from '@monaco-editor/react';
import React from 'react';

interface Props {
    problem: ProblemType;
    activeTab: number;
}
const languege = [
    'python',
    'c',
    'cpp',
    'java',
    'javascript',
    'php'

]


export const Problem: React.FC<Props> = ({ problem }) => {

    return (
        <div className="p-4  rounded mb-4 grid grid-cols-1 lg:grid-cols-2 ">
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
            <div className='bg-[#1f1f1f] p-2 lg:-mt-30 space-y-2 rounded-xl' >
                <select name="cars" id="cars" className='text-white text-sm bg-[#1f1f1f]'>
                    {
                        languege.map((e) => {
                            return <option value={e}>{e}</option>
                        })
                    }
                </select>
                <Editor
                    className=''
                    height="60vh"
                    theme='vs-dark'
                    language='python'
                    defaultValue="// let's write some broken code 😈"
                />
            </div>
        </div>
    );
}