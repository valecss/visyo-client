import styled from "styled-components";

export const Footer = styled.footer<{ $theme: "light" | "dark" }>`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  overflow: clip;
  padding-inline: 16px;
  padding-block: 48px;
  padding-bottom: 18px;

  background-color: ${({ $theme }) =>
    $theme === "light" ? "#002635" : "#071419"};
  border-top: 1px solid
    ${({ $theme }) =>
      $theme === "dark" ? "rgba(255, 255, 255, .15)" : "transparent"};

  @media screen and (min-width: 765px) {
    padding-inline: 24px;
    padding-block: 48px;
    padding-bottom: 18px;
  }

  @media screen and (min-width: 1000px) {
    padding-inline: 80px;
  }

  @media screen and (min-width: 1440px) {
    padding-inline: 200px;
  }
`;
