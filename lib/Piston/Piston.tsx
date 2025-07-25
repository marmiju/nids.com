
export interface Root {
  run?: Run
  language: string
  version: string
}

export interface Run {
  stdout: string
  stderr: string
  code: number
  signal?: string
  output: string
}


export async function runOnPiston(req:unknown){
  const res = await fetch("https://emkc.org/api/v2/piston/execute", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(req),
  });
  if (!res.ok) throw new Error(`Piston error: ${res.status}`);
  return res.json();
}
