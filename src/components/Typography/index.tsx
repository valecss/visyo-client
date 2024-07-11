import styled from "styled-components";

export const Heading1 = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 32px;

  font-weight: 600;
  letter-spacing: -0.12rem;
  line-height: 120%;

  @media screen and (min-width: 576px) {
    font-size: 36px;
  }

  @media screen and (min-width: 765px) {
    font-size: 42px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 64px;
  }
`;

export const Heading2 = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-size: 32px;

  font-weight: 600;
  letter-spacing: -0.07rem;
  line-height: 120%;

  @media screen and (min-width: 1440px) {
    font-size: 42px;
  }
`;

export const Heading3 = styled.h3`
  font-family: "Montserrat", sans-serif;
  font-size: 18px;

  font-weight: 600;
  letter-spacing: -0.05rem;
  line-height: 140%;

  @media screen and (min-width: 765px) {
    font-size: 22px;
  }
`;

export const Body = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 16px;

  letter-spacing: -0.05rem;
  line-height: 140%;

  @media screen and (min-width: 1220px) {
    font-size: 16px;
  }
`;
