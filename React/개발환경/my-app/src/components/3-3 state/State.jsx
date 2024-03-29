import React, { useState } from "react";

export default function State() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  return (
    <div>
      Count : {count}
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
      <button onClick={() => setCount(initialCount)}>reset</button>
    </div>
  );
}
