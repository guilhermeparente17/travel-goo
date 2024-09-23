import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: fit-content;
  height: 50px;
  background-color: #00A651;
  color: #fff;
  font-size: 18px;
  font-family: "Open Sans", sans-serif;
  border-radius: 10px;
  border: 0;
  padding: 0px 15px;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: #177343;
    cursor: pointer;
    transition: 0.2s ease-in-out;
  }

  &:active {
    transform: scale(1.1);
  }
`;