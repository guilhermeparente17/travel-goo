import styled from "styled-components";

export const HeroContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const HeroBackground = styled.img`
  width: 100%;
  height: 900px;
  background-size: cover;
  background-position: center;
  filter: brightness(0.5);
  position: absolute;
`;

export const HeroContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 150px;
`;

export const HeroTitle = styled.h1`
  font-family: "Open Sans", serif;
  font-weight: bold;
  font-size: 75px;
  text-align: center;
  color: #fff;
`;

export const HeroP = styled.p`
  font-family: "Open Sans", serif;
  font-size: 16px;
  text-align: center;
  font-weight: 500;
  color: #fff;
  margin-bottom: 40px;
`;