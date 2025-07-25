"use client";

import { Problem as ProblemType } from "@/lib/contest/Contest";
import { runOnPiston } from "@/lib/Piston/Piston";
import { runtimeMap } from "@/lib/compiler/runTimeLag/run_lan";
import { Editor } from "@monaco-editor/react";
import React, { useEffect, useState } from "react";
import { submission } from "@/lib/Function/Submit";
import { jwtDecode } from "jwt-decode";
import { useSelector } from "react-redux";
import { RootType } from "@/app/redux/store/Store";

interface MyTokenPayload {
  userId: number;
}

interface Props {
  problem: ProblemType;
  code: string;
  onCodeChange: (code: string) => void;
  expired: boolean;
  onChangeOutput: (output: string) => void;
  onChngeError: (error: string) => void;
  output: string;
  outerror: string;
  contest_id: number;
  // output?: string;
}

export const Problem: React.FC<Props> = ({
  problem,
  code,
  onCodeChange,
  expired,
  onChangeOutput,
  onChngeError,
  output,
  outerror,
  contest_id,
}) => {
  const [isRunning, setIsRunning] = useState(false);
  const [language, setLanguage] = useState<string>("python");
  const [version, setVersion] = useState(runtimeMap["python"]);
  // const [SnipedCode, setSnipetCode] = useState(CodeSnipet[language]);
  // const [expectedOutput, setExpectedOutput] = useState<string>("");
  const [isAccepted, setIsAccepted] = useState<boolean | null>(null);

  const [userId, setUserId] = useState<number>();

  // ===================
  const userData = useSelector((state: RootType) =>
    state.Problem.find((item) => item.user_id === userId)
  ) as { value: number[] } | undefined;

  // =======
  useEffect(() => {
    const token = localStorage.getItem("token");
    // if (!token) redirect("/login");
    const decoded_value = jwtDecode<MyTokenPayload>(token!);
    setUserId(decoded_value.userId);
  }, []);


  // when language changes, update version
  useEffect(() => {
    setVersion(runtimeMap[language]);
    // setSnipetCode(CodeSnipet[language]);
  }, [language]);

  const handleEditorChange = (value: string | undefined) => {
    if (value !== undefined) onCodeChange(value);
  };

  const handlecodeChenge = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setLanguage(value);
    // setSnipetCode(CodeSnipet[language]);
  };

  const runCode = async () => {
    setIsRunning(true);
    onChngeError("");
    setIsAccepted(null);

    try {
      console.log(problem.input);
      const response = await runOnPiston({
        language: language,
        version: version,
        files: [{ name: `main.${language}`, content: code }],
        stdin: problem.input.replace(/\\n/g, "\n") || "",
      });

      if (response.run.stderr) {
        // console.log(response.run.stderr);
        console.log(response.run.stderr);
        onChngeError(response.run.stderr);
      }
      onChangeOutput(response.run.stdout);
      console.log(
        "Expected " + problem.output,
        "output:" + response.run.stdout
      );
    } catch (err) {
      setIsRunning(false);
      console.log(err); // this sets the error message
    }

    setIsRunning(false);
  };

  const Submit = async () => {
    setIsRunning(true);
    onChngeError("");

    try {
      const response = await runOnPiston({
        language: language,
        version: version,
        files: [{ name: `main.${language}`, content: code }],
        stdin: problem.input.replace(/\\n/g, "\n") || "",
      });

      if (response.run.stderr) {
        onChngeError(response.run.stderr);
      }

      const receivedOutput = response.run.stdout.replace(/\r/g, ""); // normalize line endings
      const expected = problem.output.replace(/\\n/g, "\n").replace(/\r/g, "");

      onChangeOutput(receivedOutput);
      // setExpectedOutput(expected);
      setIsAccepted(receivedOutput.trim() === expected.trim());
      console.log(isAccepted);
      const status = receivedOutput.trim() === expected.trim();

      //submission
      submission({
        contest_id,
        problem_id: problem.id,
        isAccepted: status,
      });
    } catch (err) {
      console.log(err);
    }

    setIsRunning(false);
  };

  return (
    <div>
      <div className="pt-2 rounded mb-4 grid grid-cols-1 lg:grid-cols-2 gap-2">
        {/* Problem statement */}
        <div className="bg-white shadow-sm p-2 rounded-2xl border border-gray-100">
          <div className="flex justify-between">
            <h2 className="text-sm font-light text-center border rounded-full border-gray-200 shadow px-2">
              Id: {problem.id}
            </h2>
            {userData && userData.value.includes(problem.id) && (
              <p className="text-sm font-light text-center border rounded-full border-green-600 text-white bg-green-500 shadow shadow-green-500 px-2">
                ⨀ Solved
              </p>
            )}
          </div>
          <h2 className="text-xl font-semibold">{problem.title}</h2>

          <p className="text-gray-700 bg-gray-100 mr-2 p-2">
            {problem.description}
          </p>
          <div className={` mr-2 text-text my-10 space-y-4 `}>
            Input:
            <pre className="bg-gray-900 p-2 mb-2 rounded text-gray-200">
              3 <br></br>
              {
                problem.input &&
                problem.input
                  .replace(/\\n/g, "\n") // Convert escaped newlines to real newlines
                  .split("\n") // Split lines
                  .slice(1, 4) // Show only first 3 lines
                  .join("\n") // Join back for display
              }
            </pre>
            Expected Output:
            <pre
              className={`bg-gray-900 p-2 mb-2  rounded ${isAccepted === null
                ? "text-gray-200"
                : isAccepted
                  ? "text-green-500"
                  : "text-red-500"
                }`}
            >
              {problem.output &&
                problem.output
                  .replace(/\\n/g, "\n")
                  .split("\n")
                  .slice(0, 3)
                  .join("\n")}
            </pre>
            {output && (
              <div
                className={`${isAccepted === null
                  ? "text-gray-800"
                  : isAccepted
                    ? "text-green-500"
                    : "text-red-500"
                  }`}
              >
                Your Output:
                <pre
                  className={`bg-gray-900 p-2 rounded whitespace-pre-wrap ${isAccepted === null
                    ? "text-gray-200"
                    : isAccepted
                      ? "text-green-500"
                      : "text-red-500"
                    }`}
                >
                  {outerror
                    ? outerror
                    : output
                      .replace(/\\n/g, "\n")
                      .split("\n") // Split lines
                      .slice(0, 3) // Show only first 3 lines
                      .join("\n")}
                </pre>
              </div>
            )}
          </div>
        </div>

        {/* Editor & controls */}
        <div className="bg-[#1f1f1f] p-2 space-y-2 rounded-xl">
          <div className="">
            {isAccepted !== null && (
              <p
                className={` rounded-md ${isAccepted ? "bg-green-500" : "bg-red-500"
                  } text-white p-2`}
              >
                {isAccepted ? "Accepted" : "Rejected"}
              </p>
            )}
          </div>
          {expired ? (
            <p className="bg-red-600 text-center text-white p-4">
              Oops! Contest Ended😔
              <br />
              <span className="text-gray-300">{`You can't Run Code`}</span>
            </p>
          ) : isRunning ? (
            <p className="text-white text-center">{`↻ Exucuting...`}</p>
          ) : (
            <div className="flex justify-center gap-1">
              <button
                onClick={runCode}
                className="shadow-sm transition-colors duration-500 hover:bg-red-500 bg-gray-600 text-white p-2 px-4 rounded-sm"
              >
                ▷ Run
              </button>
              <button
                onClick={Submit}
                className="shadow-sm hover:bg-red-500 transition-colors duration-500 bg-green-200 p-2 px-4 rounded-sm"
              >
                ⇮ Submit
              </button>
              { }
            </div>
          )}
          <div
            className={`flex items-center gap-2 ${isAccepted ? "text-green-500" : "text-red-600"
              }`}
          >
            <select
              className="text-white text-sm bg-[#1f1f1f] p-1 rounded"
              value={language}
              onChange={handlecodeChenge}
            >
              {Object.keys(runtimeMap).map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>

            <span className="text-gray-400 text-sm">v{version}</span>
          </div>

          <Editor
            height="60vh"
            theme="vs-dark"
            language={language}
            onChange={handleEditorChange}
            value={code}
          />
        </div>
      </div>
    </div>
  );
};
