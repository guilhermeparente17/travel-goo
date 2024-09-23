import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  z-index: 999;
`;

export const HeaderLogo = styled.span`
  font-family: "Laila", serif;
  font-weight: bold;
  font-size: 25px;
  text-align: center;
  margin-left: 136px;
  color: white;
`;

export const HeaderItems = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderItem = styled.li`
  margin: 0px 46px;
  font-family: "Open Sans", serif;
  font-weight: 600;
  color: white;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
