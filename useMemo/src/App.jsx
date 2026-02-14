import React, { useState, useMemo, useEffect } from "react";

// simulate slow calculation
function slowFunction(num) {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {} // heavy loop
  return num * 2;
}

const App = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  // runs only when number changes
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  // runs only when theme changes
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
      padding: "20px",
      marginTop: "20px",
      width: "200px",
      textAlign: "center",
    };
  }, [dark]);

  // runs only when theme changes
  useEffect(() => {
    console.log("Theme changed");
  }, [themeStyles]);

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h2>useMemo Demo</h2>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />

      <br /><br />

      <button onClick={() => setDark((curr) => !curr)}>
        Toggle Theme
      </button>

      <div style={themeStyles}>{doubleNumber}</div>
    </div>
  );
};

export default App;
