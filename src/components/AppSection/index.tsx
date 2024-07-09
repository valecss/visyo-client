import styled from "styled-components";

export const AppSection = styled.section`
  max-width: 100vw;
  overflow-x: clip;
  position: relative;
  display: flex;
  padding-inline: 16px;

  @media screen and (min-width: 765px) {
    padding-inline: 24px;
  }

  @media screen and (min-width: 1000px) {
    padding-inline: 80px;
  }

  @media screen and (min-width: 1440px) {
    padding-inline: 200px;
  }
`;
