import { useThemeColors, useThemeStore } from "@/hooks/useTheme";
import { AppButton } from "../Button";
import { VFlex } from "../Flex";
import { Body } from "../Typography";
import styled from "styled-components";
import { useEffect, useState } from "react";

const SwitchElement = styled(VFlex)<{ $theme: "light" | "dark" }>`
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  padding-inline: 8px;
  padding-block: 4px;

  transition: all 0.2s;
  z-index: 1;

  &:hover {
    background-color: ${({ $theme }) =>
      $theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, .07ter)"};
  }
`;

const SwitchIndicator = styled.div<{ $theme: "light" | "dark" }>`
  height: calc(100% - 4px);
  width: calc(50% - 2px);
  border-radius: 100px;

  position: absolute;
  top: 2px;
  left: 2px;
  transform: translateX(${({ $theme }) => ($theme === "light" ? 0 : "100%")});

  z-index: 0;

  transition: transform 0.3s !important;
`;

export const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useThemeStore();
  const colors = useThemeColors();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <AppButton
      small
      type={3}
      onClick={toggleTheme}
      style={{
        border: "none",
        position: "relative",
        padding: "2px",
        gap: 0,
        height: "32px",
        backgroundColor:
          theme === "light" ? "rgba(255, 255, 255, .6)" : "#1F343A",
      }}
    >
      <SwitchIndicator
        $theme={theme}
        style={{ backgroundColor: colors.primary }}
      />
      <SwitchElement $theme={theme}>
        <Body
          style={{
            fontSize: "14px",
            fontWeight: 500,
            opacity: theme === "light" ? 1 : 0.6,
            marginTop: "3px",
            color: theme === "light" ? "#002635" : "#A4E6EF",
          }}
        >
          Web2
        </Body>
      </SwitchElement>
      <SwitchElement $theme={theme}>
        <Body
          style={{
            fontSize: "14px",
            fontWeight: 500,
            marginTop: "3px",
            opacity: theme === "dark" ? 1 : 0.6,
            color: theme === "dark" ? "#002635" : "#002635",
          }}
        >
          Web3
        </Body>
      </SwitchElement>
    </AppButton>
  );
};
