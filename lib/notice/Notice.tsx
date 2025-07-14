// lib/notice/Notice.ts

export type noticetype = {
  title: string;
  description: string;
  author: string;
  date: string;
};

export type noticesType = noticetype[];

export const getNotices = async () => {
  const respons = await fetch(
    `${process.env.NEXT_PUBLIC_END_POINT}/getnotices`,
    {
      cache: "no-store",
    }
  );
  const result = await respons.json();
  const sortednotice = result.result.sort(
    (a: { date: string }, b: { date: string }) => {
      new Date(b.date).getTime() - new Date(a.date).getTime();
    }
  );
  return sortednotice; // Should be an array of notice objects
};
