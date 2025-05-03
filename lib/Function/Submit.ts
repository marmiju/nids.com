
interface sub_pros {
  contest_id: number;
  problem_id: number;
  isAccepted?: boolean | null;
}

export async function submission({ contest_id, problem_id, isAccepted }: sub_pros) {
    const token = localStorage.getItem('token')
    // console.log("token:   "+token+isAccepted)
    
   const response = await fetch(`${process.env.NEXT_PUBLIC_END_POINT}/submit`, {
        method: 'POST',
        headers: { 'Content-Type': "Application/json" },
        body:JSON.stringify({ token,contest_id,problem_id,isAccepted})
   })
  const result = await response.json()
  alert(result.message)
  
  
}

