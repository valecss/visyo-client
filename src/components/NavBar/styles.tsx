import styled from "styled-components";
import { HFlex } from "../Flex";
import NextLink from "next/link";
import { BaseColors } from "@/styles";

export const Nav = styled.nav<{ $theme: "light" | "dark" }>`
  padding-block: 32px;
  padding-inline: 16px;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;

  background-image: ${({ $theme }) => `linear-gradient(
    180deg,
    ${$theme === "light" ? "#edf4f7" : "#071419"} 60%,
    rgba(237, 244, 247, 0)
  )`};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

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

export const NavigationFlex = styled(HFlex)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);

  gap: 16px;
`;

export const NavItem = styled(NextLink)<{ $active?: boolean }>`
  font-weight: 500;
  font-size: 16px;

  letter-spacing: -0.02rem;

  transition: all 0.2s;
  opacity: ${({ $active }) => ($active ? 1 : 0.6)};

  &:hover {
    opacity: 0.8;
  }
`;
