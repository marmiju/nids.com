export interface Root {
  run?: Run
  language: string
  version: string
  files? : any
}

export interface Run {
  stdout: string
  stderr: string
  code: number
  signal: any
  output: string
}


export async function runOnPiston(req:any): Promise<any> {
  const res = await fetch("https://emkc.org/api/v2/piston/execute", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(req),
  });
  if (!res.ok) throw new Error(`Piston error: ${res.status}`);
  return res.json();
}
