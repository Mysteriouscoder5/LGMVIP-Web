import "./App.css";
import { Paper, Button, Typography } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";

function App() {
  const Buttons = [
    "1",
    "2",
    "3",
    "/",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "+",
    ".",
    "0",
    "=",
    "*",
  ];

  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const ops = ["/", "+", "-", "*", ".", "="];

  const updateCalc = (value) => {
    if (value === "=" && calc !== "") {
      setCalc(eval(calc).toString());
    }
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1))) ||
      (ops.includes(value) && value === "=")
    ) {
      return;
    }
    setCalc(calc + value);
  };

  return (
    <Wrapper>
      <div className="container">
        <Paper className="paper" elevation={5}>
          <div className="display-screen">
            <div className="main-screen">
              <Typography
                sx={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  color: "black",
                  textAlign: "right",
                }}
              >
                {calc || "0"}
              </Typography>
            </div>
            <Button
              sx={{ p: 1 }}
              variant="contained"
              color="secondary"
              onClick={() => setCalc("")}
            >
              <Typography sx={{ fontSize: "2rem", fontWeight: "bold" }}>
                C
              </Typography>
            </Button>
          </div>
          <div className="buttons">
            {Buttons.map((b, i) => (
              <Button
                key={i}
                sx={{ p: 1 }}
                variant="contained"
                color="secondary"
                onClick={() => {
                  updateCalc(b);
                }}
              >
                <Typography sx={{ fontSize: "2rem", fontWeight: "bold" }}>
                  {b}
                </Typography>
              </Button>
            ))}
          </div>
        </Paper>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  .container {
    width: 100vw;
    height: 100vh;
    display: flex;
  }
  .paper {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding: 2rem;
    margin: auto;
    width: 40%;
    background-color: black;
    border-radius: 1rem;
    .display-screen {
      display: flex;
      flex-direction: row;
      gap: 1rem;
      .main-screen {
        width: 100%;
        padding: 1rem;
        border-radius: 4px;
        background-color: white;
      }
    }
    .buttons {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;
    }
  }
`;
export default App;
