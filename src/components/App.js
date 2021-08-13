import React, { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Welcome to React App</h2>
      <h3>Date : {new Date().toDateString()}</h3>
      <h3>Count: {count}</h3>
      <button onClick={() =>
        setCount(count + 1)}
      >Click me</button>
    </div>
  );
};

export default App;
