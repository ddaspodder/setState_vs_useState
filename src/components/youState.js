import React, { useState } from "react";

function YouState(props) {
  const [count, setCount] = useState(0);
  const handleOnClick = function () {
    setCount(count);
  };
  console.log("count", count);
  return (
    <div>
      <h1>useState</h1>
      <h2>Count:{count}</h2>
      <button onClick={handleOnClick}>Click Me!!</button>
    </div>
  );
}

export default YouState;
