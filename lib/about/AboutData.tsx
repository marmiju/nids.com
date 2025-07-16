
export interface ProgramItem {
  title: string;
  desc: string;
  image: string;
  slogan: string;
}

export interface ProgramsData {
  title: string;
  desc: string;
  programs: ProgramItem[];
}

export interface Achievement {
  title: string;
  desc: string;
  position: string;
  image: string;
}

export interface Goal {
  title: string;
  desc: string;
}

export interface AboutUsData {
  title: string;
  image: string;
  desc: string;
  programs: ProgramsData;
  achivement: Achievement[];
  goal: Goal[];
}

export const AboutData = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_END_POINT}/getabout`,{
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.status}`);
  }

  await new Promise((r) => setTimeout(r, 2000));
  const alldata = await response.json();

  const result: AboutUsData = alldata.allData;

  return result;
};
