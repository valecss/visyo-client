import { useThemeStore } from "@/hooks/useTheme";
import { CSSProperties, PropsWithChildren } from "react";
import styled from "styled-components";

const BaseCard = styled.div<{
  $theme: "light" | "dark";
  $elevation?: 1 | 2 | 3;
}>`
  display: flex;
  flex-direction: column;

  padding: 18px;
  gap: 18px;

  border-radius: 16px;

  background-color: ${({ $theme }) =>
    $theme === "light" ? "#f8fcfd" : "#162429"};
  overflow: clip;
  border: 2px solid rgba(255, 255, 255, 0.05);

  ${({ $elevation }) =>
    $elevation === 2
      ? `
  -webkit-box-shadow: 0px 4px 8px -4px rgba(0,0,0,0.55);
  -moz-box-shadow: 0px 4px 8px -4px rgba(0,0,0,0.55);
  box-shadow: 0px 4px 8px -4px rgba(0,0,0,0.55);`
      : $elevation == 3
      ? ""
      : ""}
`;

const FeatureCardStyle = styled(BaseCard)`
  width: 100%;

  @media screen and (min-width: 900px) {
    padding-inline: 32px;
    padding-block: 28px;
  }
`;

export const FeatureCard: React.FC<
  PropsWithChildren<{ style?: CSSProperties; elevation?: 1 | 2 | 3 }>
> = ({ elevation, children, ...params }) => {
  const { theme } = useThemeStore();

  return (
    <FeatureCardStyle $elevation={elevation} {...params} $theme={theme}>
      {children}
    </FeatureCardStyle>
  );
};
