import { Paper, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { RiAccountBoxFill } from "react-icons/ri";
const StudentCard = ({ student, index }) => {
  return (
    <Wrapper>
      <div className="student-info">
        <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          Student Id : {index + 1}
        </Typography>
        <Typography sx={{ fontSize: "1.5rem", color: "rgba(29,29,29,.7)" }}>
          {student.name}
        </Typography>
        <Typography sx={{ fontSize: "1.5rem", color: "rgba(29,29,29,.7)" }}>
          {student.email}
        </Typography>
        <Typography sx={{ fontSize: "1.5rem", color: "rgba(29,29,29,.7)" }}>
          {student.website}
        </Typography>
        <Typography sx={{ fontSize: "1.5rem", color: "rgba(29,29,29,.7)" }}>
          {student.gender}
        </Typography>
        <Typography sx={{ fontSize: "1.5rem", color: "rgba(29,29,29,.7)" }}>
          Skills :{" "}
          {student.skills.map((elem, i) => {
            if (i === 0) {
              return elem;
            } else return `,${elem}`;
          })}
        </Typography>
      </div>

      <div className="student-image">
        <RiAccountBoxFill className="icon" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  padding: 1rem;
  border-radius: 1rem;

  justify-content: space-between;
  .student-info {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
  .icon {
    width: 6rem;
    height: 6rem;
    color:rgba(29,29,29,.3)
  }
`;

export default StudentCard;
