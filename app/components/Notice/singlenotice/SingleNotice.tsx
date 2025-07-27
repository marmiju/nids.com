"use client";
import React, { useState } from "react";
import { noticetype } from "@/lib/notice/Notice";
import { Modal } from "../../Modal/Modal";
import { BsEyeFill } from "react-icons/bs";

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
    <>
      <div
        className={`${
          idx % 2 === 0 ? "bg-text text-background" : " bg-text/50"
        } py-2 px-4 relative `}
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-x-2">
              <p className="font-medium ">{notice.title}</p>
              {isNew && (
                <p className="text-sm bg-primary text-background font-semibold  text-center px-1 rounded px-2">
                  New
                </p>
              )}
            </div>
            <p className="text-white/80 text-sm">
              {notice.author + " | " + notice.date.slice(0, 10)}
            </p>
          </div>

          <button onClick={handleOpenModal}>
            <BsEyeFill className="text-xl text-background hover:scale-150 hover:cursor-pointer transition-all duration-200" />
          </button>
        </div>

        {/* Modal Rendered Conditionally */}
      </div>
      {showModal && <Modal notice={notice} onClose={handleCloseModal} />}
    </>
  );
};
