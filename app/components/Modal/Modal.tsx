import { noticetype } from "@/lib/notice/Notice";
import React from "react";
import { IoCloseCircleSharp } from "react-icons/io5";

interface Props {
  notice: noticetype;
  onClose: () => void;
}

export const Modal: React.FC<Props> = ({ notice, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="absolute max-w-[600px] bg-white p-2 rounded-2xl">
        <button
          onClick={onClose}
          className="top-3 left-3 text-2xl text-red-600 hover:scale-102 hover:cursor-pointer"
        >
          <IoCloseCircleSharp />
        </button>
        <div className="flex gap-4">
          <p className="font-semibold text-slate-800">{notice.title}</p>
          <p className="font-semibold text-slate-300">{notice.author}</p>
        </div>
        <p className="text-gray-400">{notice.date.slice(0, 10)}</p>
        <div className="border-t-2 border-gray-200 w-40 mt-2"> </div>
        <p className=" p-2 font-medium">{notice.description}</p>
      </div>
    </div>
  );
};
