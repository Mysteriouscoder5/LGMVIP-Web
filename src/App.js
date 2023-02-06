import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import styled from "styled-components";
import { useState } from "react";
import { GlobalStyles } from "./GlobalStyles";
import { TextField } from "@mui/material";
import { MdClear } from "react-icons/md";
import { AiOutlineCheck } from "react-icons/ai";
import { IconButton } from "@mui/material";
function App() {
  const [list, setList] = useState([]);
  const [Task, setTask] = useState({
    task: "",
    completed: false,
  });

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Paper className="paper" elevation={6}>
          <Typography
            sx={{
              fontSize: "3rem",
              color: "black",
              textAlign: "center",
            }}
          >
            My To Do List
          </Typography>
          <hr />
          <div className="list-input">
            <TextField
              id="standard-basic"
              label="Enter Your Task"
              variant="outlined"
              name="task"
              InputLabelProps={{ style: { fontSize: 15 } }}
              InputProps={{ style: { fontSize: 15 } }}
              sx={{
                fontSize: "2.5rem",
                color: "black",
                textAlign: "center",
                flex: "1 1 auto",
              }}
              value={Task.task}
              onChange={(e) => {
                setTask({ task: e.target.value, completed: false });
              }}
            />
            <Button
              color="secondary"
              variant="contained"
              sx={{ p: "1rem", fontSize: "1.5rem" }}
              onClick={() => {
                setTask({
                  task: "",
                  completed: false,
                });
                setList((state) => [...state, Task]);
                console.log(list);
              }}
            >
              Add
            </Button>
          </div>
        </Paper>
        {list.length > 0 &&
          list.map((elem, i) => {
            if (elem.task !== "") {
              return (
                <Paper
                  key={i}
                  elevation={6}
                  className={
                    elem.completed === true
                      ? "task  task-completed"
                      : "task task-notcompleted"
                  }
                >
                  <IconButton
                    onClick={() => {
                      setList((state) => {
                        const newArray = Array.from(state);
                        newArray[i].completed = true;
                        return newArray;
                      });
                    }}
                  >
                    <AiOutlineCheck className="icon" />
                  </IconButton>
                  <div style={{ display: "flex" }}>
                    <Typography
                      className={elem.completed === true ? "text" : ""}
                      sx={{
                        fontSize: "2rem",
                        color: "black",
                        p: "1rem",
                        textTransform: "capitalize",
                      }}
                    >
                      {elem.task}
                    </Typography>
                    {elem.completed && (
                      <Typography
                        sx={{
                          fontSize: "2rem",
                          color: "black",
                          p: "1rem",
                        }}
                      >
                        (Completed)
                      </Typography>
                    )}
                  </div>
                  <IconButton
                    onClick={() => {
                      setList((state) => {
                        const newArray = Array.from(state);
                        newArray.splice(i, 1);
                        return newArray;
                      });
                    }}
                    sx={{
                      marginLeft: "auto",
                    }}
                  >
                    <MdClear className="icon" style={{}} />
                  </IconButton>
                </Paper>
              );
            } else return <></>;
          })}
      </Wrapper>
    </>
  );
}
const Wrapper = styled.section`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  .paper {
    display: flex;
    width: 40vw;
    padding: 1rem;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    margin-top: 2rem;
    .list-input {
      display: flex;
      padding: 1rem;
      flex-direction: row;
      gap: 1rem;
      width: 100%;
      justify-content: center;
      padding: 2rem;
    }
  }
  .task {
    display: flex;
    flex-direction: row;
    align-item: center;
    gap: 1rem;
    padding: 1rem;
    width: 40vw;
    transition: all 100ms inear;

    &.task-completed {
      background-color: lightgreen;
    }
    &.task-notcompleted {
      background-color: lightblue;
    }
    .icon {
      width: 2.5rem;
      height: 2.5rem;
    }
    .text {
      text-decoration: line-through;
    }
  }
`;
export default App;
