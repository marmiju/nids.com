export interface TestCase {
    input: string;
    expected: string;
}

export interface Problem {
    id: number;
    contest_id: number;
    title: string;
    description: string;
    testcases: TestCase[];
}

export interface Contest {
    id: number;
    title: string;
    description: string;
    hosted_by: string | null;
    created_at: string;
    problems: Problem[];
}
export interface Props {
    contests: Contest[]
}


export const Contest = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_END_POINT}/contest`)
    if (!response.ok) {
        throw new Error('Something went wrong');
    }

    const data = response.json()
    return data
}
