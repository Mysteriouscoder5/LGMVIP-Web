import { GlobalStyles } from "./GlobalStyles";
import styled from "styled-components";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { Paper } from "@mui/material";

import Loader from "./Loader";

function App() {
  const [loading, setLoading] = useState();
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    setLoading(true);
    const { data } = await axios.get(`https://reqres.in/api/users?page=1`);
    setUsers((state) => data.data);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <>
      <GlobalStyles />
      <Nav>
        <div className="container">
          <div className="navbar">
            <div className="brand-name">
              <Typography
                sx={{
                  fontSize: "3rem",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                Brand.
              </Typography>
            </div>
            <div className="navbar-list">
              <div>
                <Typography
                  sx={{ fontSize: "1.5rem", fontWeight: 550, color: "white" }}
                >
                  Home
                </Typography>
              </div>
              <div>
                <Typography
                  sx={{ fontSize: "1.5rem", fontWeight: 550, color: "white" }}
                >
                  Contact
                </Typography>
              </div>
              <div>
                <Typography
                  sx={{ fontSize: "1.5rem", fontWeight: 550, color: "white" }}
                >
                  About us
                </Typography>
              </div>
              <div>
                <Typography
                  sx={{ fontSize: "1.5rem", fontWeight: 550, color: "white" }}
                >
                  Products
                </Typography>
              </div>
            </div>
            <div className="get-users">
              <Button
                onClick={() => getUsers()}
                variant="outlined"
                sx={{
                  "&.MuiButton-outlined": {
                    border: "1px solid white",
                    backgroundColor: "black",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: "2rem",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    color: "white",
                  }}
                >
                  Get Users
                </Typography>
              </Button>
            </div>
          </div>
        </div>
      </Nav>
      {loading ? (
        <Loader open={loading} />
      ) : (
        <Users>
          <div className="container">
            <div className="all-users">
              {users.map((user, i) => (
                <Paper className="user" key={i} elevation={5}>
                  <div className="user-info">
                    <Typography sx={{ fontSize: "2rem", fontWeight: "bold" }}>
                      {user.id}
                    </Typography>
                    <Typography
                      sx={{ fontSize: "1.5rem", textTransform: "capitalize" }}
                    >
                      first_name : {user.first_name}
                    </Typography>
                    <Typography
                      sx={{ fontSize: "1.5rem", textTransform: "capitalize" }}
                    >
                      last_name : {user.last_name}
                    </Typography>
                    <Typography
                      sx={{ fontSize: "1.5rem", textTransform: "capitalize" }}
                    >
                      email : {user.email}
                    </Typography>
                  </div>
                  <div className="user-image">
                    <img src={user.avatar} alt={user.id} />
                  </div>
                </Paper>
              ))}
            </div>
          </div>
        </Users>
      )}
    </>
  );
}
const Nav = styled.nav`
  background-color: black;
  color: white;
  .navbar {
    display: flex;
    flex-direction: row;
    padding: 2rem;
    align-items: center;
    justify-content: space-between;

    .navbar-list {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      div {
        padding: 1rem;
      }
    }
  }
`;

const Users = styled.section`
  .container {
    max-width: 60vw;
  }
  .all-users {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 5rem;
    .user {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      padding: 1rem;
      .user-info {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }
    }
  }
`;
export default App;
