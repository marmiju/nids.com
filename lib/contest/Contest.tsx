export interface TestCase {
  input: string;
  expected: string;
}

export interface Problem {
  id: number;
  contest_id: number;
  title: string;
  description: string;
  input: string;
  output: string;
}

export interface Contest {
  id: number;
  title: string;
  description: string;
  hosted_by: string | null;
  created_at: string;
  end_time: string;
  problems: Problem[];
}
export interface Props {
  contests: Contest[];
}

export const OneContest = async (id:number) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_END_POINT}/onecontest`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    const data = await res.json();
    // console.log(data);
    return data[0];
  } catch (error) {
    console.error("Failed to fetch contest:", error);
  }
};


export const getContest =async ()=>{
  try{
    const res = await fetch(`${process.env.NEXT_PUBLIC_END_POINT}/contest`,{
      next:{
        revalidate:10,
      }
    });
    const data:Contest[] = await res.json() 
    return data

  }catch(err){
    console.log(err)
    throw new Error("Failed to fetch contest")
  }

}