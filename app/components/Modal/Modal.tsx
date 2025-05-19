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
      <div className="relative max-w-full h-screen w-full backdrop-blur-3xl bg-white/90 p-6 rounded-sm">
        <button
          onClick={onClose}
          className="flex top-4 right-4 text-2xl hover:cursor-pointer hover:scale-150 text-red-600 transition-all duration-200"
        >
          <IoCloseCircleSharp />
        </button>

        <div className="space-y-2">
          <p className="font-semibold text-gray-800 text-lg">{notice.title}</p>
          <p className="text-sm text-slate-500">{notice.author}</p>
          <p className="text-slate-400 text-sm">{notice.date.slice(0, 10)}</p>
        </div>

        <p className="text-black whitespace-pre-wrap">{notice.description}</p>
      </div>
    </div>
  );
};
