import React, { useState, useEffect } from "react";

export default function FunctionComponent() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const tick = () => {
    setDate(new Date());
  };
  return (
    <div>
      <h1>Hello, world! It's function</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}
