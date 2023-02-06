import "./App.css";
import styled from "styled-components";
import { useState, useEffect } from "react";
import {
  Typography,
  TextField,
  Button,
  Paper,
  Checkbox,
  FormGroup,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import StudentCard from "./StudentCard";

function App() {
  const initialState = {
    name: "",
    email: "",
    website: "",
    imagelink: "",
    gender: "",
    skills: [],
  };
  const [skillsArray, setSkillsArray] = useState([]);
  const [student, setStudent] = useState({
    name: "",
    email: "",
    website: "",
    imagelink: "",
    gender: "",
    skills: [],
  });
  const [allStudents, setAllStudents] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAllStudents((state) => [...state, student]);
    console.log(allStudents);
  };

  useEffect(() => {}, [student]);

  return (
    <Wrapper>
      <div className="container">
        <Paper
          sx={{ width: "50vw", p: "2rem", margin: "auto", height: "100%" }}
          className="paper"
        >
          <Typography
            sx={{ textAlign: "center", fontSize: "2.5rem", fontWeight: "bold" }}
          >
            Student Enrollment Form
          </Typography>
          <hr />
          <div style={{ width: "100%" }}>
            <form action="" className="input-form" onSubmit={handleSubmit}>
              <TextField
                id="standard-basic"
                label="Name"
                variant="outlined"
                name="name"
                InputLabelProps={{ style: { fontSize: 15 } }}
                InputProps={{ style: { fontSize: 15 } }}
                sx={{
                  fontSize: "2.5rem",
                  color: "black",
                  textAlign: "center",
                  flex: "1 1 auto",
                }}
                value={student.name}
                onChange={(e) =>
                  setStudent({ ...student, name: e.target.value })
                }
                type="text"
              />
              <TextField
                id="standard-basic"
                label="Email"
                variant="outlined"
                name="email"
                type="email"
                InputLabelProps={{ style: { fontSize: 15 } }}
                InputProps={{ style: { fontSize: 15 } }}
                sx={{
                  fontSize: "2.5rem",
                  color: "black",
                  textAlign: "center",
                  flex: "1 1 auto",
                }}
                value={student.email}
                onChange={(e) =>
                  setStudent({ ...student, email: e.target.value })
                }
              />{" "}
              <TextField
                id="standard-basic"
                label="Website"
                variant="outlined"
                name="website"
                type="text"
                InputLabelProps={{ style: { fontSize: 15 } }}
                InputProps={{ style: { fontSize: 15 } }}
                sx={{
                  fontSize: "2.5rem",
                  color: "black",
                  textAlign: "center",
                  flex: "1 1 auto",
                }}
                value={student.website}
                onChange={(e) =>
                  setStudent({ ...student, website: e.target.value })
                }
              />{" "}
              <TextField
                id="standard-basic"
                label="Image Link"
                variant="outlined"
                name="imagelink"
                type="text"
                InputLabelProps={{ style: { fontSize: 15 } }}
                InputProps={{ style: { fontSize: 15 } }}
                sx={{
                  fontSize: "2.5rem",
                  color: "black",
                  textAlign: "center",
                  flex: "1 1 auto",
                }}
                value={student.imagelink}
                onChange={(e) =>
                  setStudent({ ...student, imagelink: e.target.value })
                }
              />
              <div>
                <Typography sx={{ fontSize: "1.5rem" }}>Gender :</Typography>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="gender"
                  row
                  value={student.gender}
                  onChange={(e) =>
                    setStudent({ ...student, gender: e.target.value })
                  }
                >
                  <FormControlLabel
                    value="Male"
                    control={
                      <Radio
                        sx={{
                          "& .MuiSvgIcon-root": {
                            fontSize: 28,
                          },
                        }}
                      />
                    }
                    label={
                      <Typography sx={{ fontSize: "1.3rem" }}>Male</Typography>
                    }
                  />
                  <FormControlLabel
                    value="Female"
                    control={
                      <Radio
                        sx={{
                          "& .MuiSvgIcon-root": {
                            fontSize: 28,
                          },
                        }}
                      />
                    }
                    label={
                      <Typography sx={{ fontSize: "1.3rem" }}>
                        Female
                      </Typography>
                    }
                  />
                </RadioGroup>
              </div>
              <div>
                <Typography sx={{ fontSize: "1.5rem" }}>Skills :</Typography>

                <FormGroup sx={{ display: "flex", flexDirection: "row" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={student.skills.includes("Java")}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setStudent((state) => {
                              let newArray = Array.from(state.skills);
                              newArray.push(e.target.name);
                              return { ...state, skills: newArray };
                            });
                          }

                          if (!e.target.checked) {
                            setSkillsArray((state) => {
                              return state.filter((current) => {
                                return current !== e.target.name;
                              });
                            });

                            let newArray = Array.from(student.skills);
                            newArray.filter((ele) => {
                              return ele !== e.target.name;
                            });
                            setStudent((state) => {
                              return { ...state, skills: newArray };
                            });
                          }
                        }}
                        name="Java"
                        sx={{
                          "& .MuiSvgIcon-root": {
                            fontSize: 25,
                          },
                        }}
                      />
                    }
                    label={
                      <Typography sx={{ fontSize: "1.3rem" }}>Java</Typography>
                    }
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={student.skills.includes("Html")}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setStudent((state) => {
                              let newArray = Array.from(state.skills);
                              newArray.push(e.target.name);
                              return { ...state, skills: newArray };
                            });
                          }
                          if (!e.target.checked) {
                            setSkillsArray((state) => {
                              return state.filter((current) => {
                                return current !== e.target.name;
                              });
                            });

                            setStudent((state) => {
                              let newArray = Array.from(state.skills);
                              newArray.filter((ele) => {
                                return ele !== e.target.name;
                              });
                              return { ...state, skills: newArray };
                            });
                          }
                        }}
                        name="Html"
                        sx={{
                          "& .MuiSvgIcon-root": {
                            fontSize: 25,
                          },
                        }}
                      />
                    }
                    label={
                      <Typography sx={{ fontSize: "1.3rem" }}>Html</Typography>
                    }
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={student.skills.includes("Css")}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setStudent((state) => {
                              let newArray = Array.from(state.skills);
                              newArray.push(e.target.name);
                              return { ...state, skills: newArray };
                            });
                          }
                          if (!e.target.checked) {
                            setSkillsArray((state) => {
                              return state.filter((current) => {
                                return current !== e.target.name;
                              });
                            });

                            setStudent((state) => {
                              let newArray = Array.from(state.skills);
                              newArray.filter((ele) => {
                                return ele !== e.target.name;
                              });
                              return { ...state, skills: newArray };
                            });
                          }
                        }}
                        name="Css"
                        sx={{
                          "& .MuiSvgIcon-root": {
                            fontSize: 25,
                          },
                        }}
                      />
                    }
                    label={
                      <Typography sx={{ fontSize: "1.3rem" }}>Css</Typography>
                    }
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={student.skills.includes("Reactjs")}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setStudent((state) => {
                              let newArray = Array.from(state.skills);
                              newArray.push(e.target.name);
                              return { ...state, skills: newArray };
                            });
                          }
                          if (!e.target.checked) {
                            setSkillsArray((state) => {
                              return state.filter((current) => {
                                return current !== e.target.name;
                              });
                            });

                            setStudent((state) => {
                              let newArray = Array.from(state.skills);
                              newArray.filter((ele) => {
                                return ele !== e.target.name;
                              });
                              return { ...state, skills: newArray };
                            });
                          }
                        }}
                        name="Reactjs"
                        sx={{
                          "& .MuiSvgIcon-root": {
                            fontSize: 25,
                          },
                        }}
                      />
                    }
                    label={
                      <Typography sx={{ fontSize: "1.3rem" }}>
                        ReactJS
                      </Typography>
                    }
                  />{" "}
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={student.skills.includes("Nodejs")}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setStudent((state) => {
                              let newArray = Array.from(state.skills);
                              newArray.push(e.target.name);
                              return { ...state, skills: newArray };
                            });
                          }
                          if (!e.target.checked) {
                            setSkillsArray((state) => {
                              return state.filter((current) => {
                                return current !== e.target.name;
                              });
                            });

                            setStudent((state) => {
                              let newArray = Array.from(state.skills);
                              newArray.filter((ele) => {
                                return ele !== e.target.name;
                              });
                              return { ...state, skills: newArray };
                            });
                          }
                        }}
                        name="Nodejs"
                        sx={{
                          "& .MuiSvgIcon-root": {
                            fontSize: 25,
                          },
                        }}
                      />
                    }
                    label={
                      <Typography sx={{ fontSize: "1.3rem" }}>
                        NodeJS
                      </Typography>
                    }
                  />
                </FormGroup>
              </div>
              <div style={{ display: "flex", gap: "2rem" }}>
                <Button variant="contained" color="info" type="submit">
                  <Typography sx={{ fontSize: "1.5rem", color: "white" }}>
                    Enroll Submit
                  </Typography>
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => setStudent(initialState)}
                >
                  <Typography sx={{ fontSize: "1.5rem", color: "white" }}>
                    Clear
                  </Typography>
                </Button>
              </div>
            </form>
          </div>
        </Paper>
        <Paper
          sx={{ width: "50vw", p: "2rem", margin: "auto", minHeight: "100%" }}
          className="paper"
        >
          <Typography
            sx={{ textAlign: "center", fontSize: "2.5rem", fontWeight: "bold" }}
          >
            Students Enrolled
          </Typography>
          <hr />
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              padding: "2rem",
            }}
          >
            {allStudents.length > 0 &&
              allStudents.map((current, i) => (
                <StudentCard student={current} key={i} index={i} />
              ))}
          </div>
        </Paper>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  height: 100vh;
  .container {
    height: 100vh;
    padding: 4rem;
    display: flex;
    gap: 2rem;
  }
  .paper {
    width: 50vw;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
  .input-form {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 2rem;
  }
`;

export default App;
