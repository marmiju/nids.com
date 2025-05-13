"use client";
import React, { useState } from "react";
import { noticetype } from "@/lib/notice/Notice";
import { Modal } from "../../Modal/Modal";
import { GiLevelFourAdvanced } from "react-icons/gi";

interface Props {
  notice: noticetype;
  idx: number;
}

export const SingleNotice: React.FC<Props> = ({ notice, idx }) => {
  const [showModal, setShowModal] = useState(false);

  const isNew = (() => {
    const noticeDate = new Date(notice.date);
    const now = new Date();
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(now.getMonth() - 1);
    return noticeDate > oneMonthAgo;
  })();

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div
      className={`${
        idx % 2 === 0 ? "bg-slate-200" : "bg-gray-100"
      } py-2 px-4 rounded-sm relative`}
    >
      <div className="flex items-center justify-between">
        <div>
          <div className="flex gap-x-2">
            <p className="font-medium">{notice.title}</p>
            <p className="rounded-md px-2 text-gray-400 text-sm">
              {notice.author}
            </p>
            {isNew && (
              <p className="text-sm text-green-600 font-semibold">New</p>
            )}
          </div>
          <p className="text-slate-400">{notice.date.slice(0, 10)}</p>
        </div>

        <button onClick={handleOpenModal}>
          <GiLevelFourAdvanced className="text-xl text-green-600 hover:scale-110" />
        </button>
      </div>

      {/* Modal Rendered Conditionally */}
      {showModal && <Modal notice={notice} onClose={handleCloseModal} />}
    </div>
  );
};
