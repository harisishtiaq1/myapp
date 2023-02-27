import React from "react";
import { Button } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
function State() {
  const [color, setColor] = useState("Red");
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [calculation, setCalculation] = useState(0);
  const [user, setUser] = useState("Mr Haris");
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, [1000]);
  });
  useEffect(() => {
    setCalculation(() => count1 * 2);
  }, [count1]);
  return (
    <>
      <h1>My favorite color is {color}</h1>
      <Button
        type="submit"
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={() => setColor("Blue")}
      >
        BLUE
      </Button>
      <Button
        type="submit"
        variant="contained"
        sx={{ mt: 4, mb: 3 }}
        style={{ marginLeft: "10px" }}
        onClick={() => setColor("Yellow")}
      >
        Yellow
      </Button>
      <h1>I have rendered {count} times</h1>
      <p>Count : {count1}</p>
      <p>Calculation:{calculation}</p>
      <Button
        type="submit"
        variant="contained"
        onClick={() => setCount1((c) => c + 1)}
      >
        Add
      </Button>
    </>
  );
}

export default State;
