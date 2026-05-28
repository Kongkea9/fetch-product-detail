"use client";

import { useState } from "react";

export default function ButtonStateComponent() {
  // handle click
  // normal variable
  let count = 0;
  function handleClick() {
    count = count + 1;
    console.log("count with normal variable : ", count);
  }
  //   state
  //   let stateCount = 0;
  let [stateCount, setStateCount] = useState<number>(0);
  function stateHandleClick() {
    stateCount = stateCount + 1;
    setStateCount(stateCount);
  }
  return (
    // with normal variable
    <>
      <button className="bg-purple-400 px-8 py-5 m-5" onClick={handleClick}>
        Count: {count}
      </button>
      {/* with state */}
      <button className="bg-amber-400 px-8 py-5 m-5" onClick={stateHandleClick}>
        Count: {stateCount}
      </button>
    </>
  );
}
