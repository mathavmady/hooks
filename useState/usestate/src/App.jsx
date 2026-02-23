import React, { useState } from "react";

function App() {
  // Initialize state
  const [count, setCount] = useState(0);

  // Increment using previous state
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // Decrement using previous state
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  // Reset counter
  const reset = () => {
    setCount(0);
  };

  return (
    <div style={styles.container}>
      <h1>React useState Counter Example</h1>
      <h2>{count}</h2>

      <div>
        <button onClick={increment} style={styles.button}>
          Increment
        </button>

        <button onClick={decrement} style={styles.button}>
          Decrement
        </button>

        <button onClick={reset} style={styles.button}>
          Reset
        </button>
      </div>
    </div>
  );
}

// Simple styling
const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial",
  },
  button: {
    margin: "10px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default App;