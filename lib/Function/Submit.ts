import { argv0 } from "process";

interface sub_pros {
  contest_id: number;
  problem_id: number;
  isAccepted?: boolean | null;
}

export async function submission({ contest_id, problem_id, isAccepted }: sub_pros) {
    const token = localStorage.getItem('token')
    console.log("token:   "+token+isAccepted)
    
    await fetch(`${process.env.NEXT_PUBLIC_END_POINT}/submit`, {
        method: 'POST',
        headers: { 'Content-Type': "Application/json" },
        body:JSON.stringify({ token,contest_id,problem_id,isAccepted})
    })
    
}

