import { useLayoutEffect, useRef, useState } from "react";

function App() {
  const boxRef = useRef(null);
  const [left, setLeft] = useState(0);

  useLayoutEffect(() => {
    const width = boxRef.current.offsetWidth;
    setLeft(window.innerWidth / 2 - width / 2);
  }, []);

  return (
    <div
      ref={boxRef}
      style={{
        position: "absolute",
       left: left,
        top: 100,
        background: "lightblue",
        padding: 20
      }}
    >
      Center Me
    </div>
  );
}

export default App;
