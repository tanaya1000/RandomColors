import { useState } from "react";

function App() {
  const [color, setColor] = useState("#27f3e1");
  const [bcolor, setBColor] = useState("#768954");
  const handleRandomColor = () => {
    const hexColor = "#" + Math.random().toString(16).slice(2, 8);
    const bHexColor = "#" + Math.random().toString(16).slice(2, 8);
    setColor(hexColor);
    setBColor(bHexColor);
  };
  console.log(color);
  return (
    <>
      <div
        style={{
          background: color,
          width: "100vw",
          height: "100vh",
        }}>
        <button
          style={{
            margin: "50px 50px",
            border: "none",
            padding: "10px 20px",
            background: bcolor,
          }}
          onClick={handleRandomColor}>
          Random Color
        </button>
      </div>
    </>
  );
}

export default App;
