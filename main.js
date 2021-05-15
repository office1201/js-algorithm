"use strict";

// 20. 가위 바위 보
const solutionGame = (A, B) => {
  if ((A === "가위" && B === "보") || (A === "가위" && B === "보") || (A === "보") & (B === "바위")) return "WinA";
  if ((B === "가위" && A === "보") || (B === "가위" && A === "보") || (B === "보") & (A === "바위")) return "WinB";
  else return "Draw";
};

console.log(solutionGame("가위", "가위"));
