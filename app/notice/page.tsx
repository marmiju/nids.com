import getNotices from '@/lib/notice/Notice';
import React from 'react';
import { SingleNotice } from '../components/singlenotice/SingleNotice';

const Page = () => {
    const noticedata = getNotices();



    return (
        <div className="max-w-[1200px] mx-auto p-6">
            <div className="w-full color-orange h-40 grid justify-center items-center rounded-2xl text-white font-semibold">
                <h1 className="text-center text-4xl">Notice Board</h1>
            </div>

            <div className="mt-6 space-y-4">
                <p className="text-lg text-gray-600 mb-4">All Notices (Latest First)</p>
                {noticedata.map((data, index) => (
                    <SingleNotice key={index} title={data.title} desc={data.desc} date={data.date} />
                ))}
            </div>
        </div>
    );
};

export default Page;
