"use client";
import React, { useState } from "react";
import { noticetype } from "@/lib/notice/Notice";
import { Modal } from "../../Modal/Modal";
import { GiLevelFourAdvanced } from "react-icons/gi";
import { BsEye } from "react-icons/bs";

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
        idx % 2 === 0 ? "bg-slate-200 " : "bg-white"
      } py-2 px-4 rounded-sm relative drop-shadow-xl`}
    >
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-x-2">
            <p className="font-medium">{"⨀ " + notice.title}</p>
          </div>
          <div className="flex items-center">
            <p className="text-slate-400">
              {notice.author + " | " + notice.date.slice(0, 10)}

              {isNew && (
                <p className="text-sm bg-red-600 font-semibold text-white text-center px-2 rounded-full">
                  New
                </p>
              )}
            </p>
          </div>
        </div>

        <button onClick={handleOpenModal}>
          <BsEye className="text-xl text-green-600 hover:scale-120 hover:cursor-pointer" />
        </button>
      </div>

      {/* Modal Rendered Conditionally */}
      {showModal && <Modal notice={notice} onClose={handleCloseModal} />}
    </div>
  );
};
