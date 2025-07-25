// lib/notice/Notice.ts

export type noticetype = {
  title: string;
  description: string;
  author: string;
  date: string;
};

export type noticesType = noticetype[];

export const getNotices = async () => {
  try {
    const respons = await fetch(
      `${process.env.NEXT_PUBLIC_END_POINT}/getnotices`,
      {
        cache: "no-store",
      }
    );
    const result = await respons.json();
    const sortednotice = result.result.sort(
      (a: { date: string }, b: { date: string }) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    return sortednotice;
  } catch (error) {
    console.log(error);
    throw new Error(`Something went wrong!`);
  }
};
