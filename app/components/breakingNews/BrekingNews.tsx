import { getNotices, noticesType } from "@/lib/notice/Notice";
import "../breakingNews/Breaking.css";
export const BreakingNews = async () => {
  const notice:noticesType = await getNotices()
  return (
    <div className="breaking  mx-auto bg-primary p-2 my-1 overflow-hidden text-nowrap">
      <p className="breaking-text text-background inline-block w-full ">
        {notice[0].title + ".   "+notice[0].description+" ---"+ notice[0].author}
      </p>
    </div>
  );
};
