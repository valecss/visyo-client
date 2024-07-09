import styled from "styled-components";
import { HFlex } from "../Flex";
import React, { PropsWithChildren } from "react";
import { useThemeStore } from "@/hooks/useTheme";

const PinStyle = styled(HFlex)<{ $theme: "light" | "dark" }>`
  width: fit-content;
  padding-inline: 12px;
  padding-block: 4px;
  gap: 8px;

  color: ${({ $theme }) => ($theme === "light" ? "#15656f" : "#A4E6EF")};
  background-color: rgba(
    ${({ $theme }) => ($theme === "light" ? "21, 101, 111" : "164, 230, 239")},
    0.1
  );

  border-radius: 100px;

  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.02rem;
`;

export const Pin: React.FC<PropsWithChildren> = ({ children, ...params }) => {
  const { theme } = useThemeStore();
  return (
    <PinStyle $theme={theme} {...params}>
      {children}
    </PinStyle>
  );
};
