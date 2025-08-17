import React from 'react';
import { MdClose } from 'react-icons/md';
import Image from 'next/image';
import { usertype } from '@/lib/users/Users';

const PersonalModal = ({ person, handlemodal }: { person: usertype, handlemodal: () => void }) => {
    return (
        <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center">
            <div className="relative max-w-5xl w-[90%]  backdrop-blur-sm border-2 border-white/20 rounded-2xl flex flex-wrap md:flex-nowrap p-6 2">

                {/* Close Button */}
                <button
                    onClick={handlemodal}
                    className="absolute top-3 right-3 text-xl text-text hover:text-red-500 transition"
                    title="Close"
                >
                    <MdClose />
                </button>

                {/* Left Section: Image + Basic Info */}
                <div className="flex flex-col items-center md:items-start min-w-[200px] md:min-w-[250px] gap-4">
                    <Image
                        className="rounded-xl w-[300px]"
                        src={person.image}
                        alt="User"
                        width={200}
                        height={200}
                    />
                    <p className="text-primary text-center md:text-left font-medium">
                       {`${person.name} | ${person.designation} | ${person.department}`}
                    </p>
                </div>

                {/* Right Section: Bio */}
                <div className="flex-1 overflow-auto max-h-[400px] p-4">
                    <p className="text-white whitespace-pre-line break-words">
                        {person.bio}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PersonalModal;
