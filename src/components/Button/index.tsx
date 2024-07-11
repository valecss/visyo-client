import { useThemeColors, useThemeStore } from "@/hooks/useTheme";
import { BaseColors } from "@/styles";
import { useRouter } from "next/router";
/* import { useRouter } from "next/router"; */
import { CSSProperties, PropsWithChildren } from "react";
import styled, { keyframes } from "styled-components";

export const BaseButtonAnimation = keyframes`
    20% {
        transform: scale(.90)
    }
`;

const BaseButton = styled.button<{ $small?: boolean }>`
  padding-inline: ${({ $small }) => ($small ? "10px" : "12px")};
  padding-block: ${({ $small }) => ($small ? "8px" : "10px")};
  max-height: ${({ $small }) => ($small ? "36px" : "44px")};

  width: fit-content;

  border-radius: 100px;
  overflow: clip;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;

  background: transparent;
  border: 1px solid transparent;
  outline: none;

  font-family: "Montserrat", sans-serif;
  font-size: ${({ $small }) => ($small ? "14px" : "16px")};

  font-weight: 500;
  letter-spacing: -0.01rem;

  cursor: pointer;
  transition: all 0.2s;

  &:focus {
    animation: 0.2s ease-in-out ${BaseButtonAnimation};
  }
`;

const Primary = styled(BaseButton)`
  background: ${true ? "#1db1c7" : BaseColors.light.primary};
  color: #fdfeff;

  &:hover {
    background: ${BaseColors.light.primaryHover};
  }
`;

const Secondary = styled(BaseButton)`
  background-color: rgba(36, 202, 224, 0.1);
  color: ${BaseColors.light.primary};
  border: 1px solid ${BaseColors.light.primary};

  &:hover {
    background-color: rgba(36, 202, 224, 0.25);
  }
`;

type AppButtonProps = {
  type: 1 | 2 | 3;
  onClick?: () => any;
  to?: string;
  style?: CSSProperties;
  small?: boolean;
};

export const AppButton: React.FC<PropsWithChildren<AppButtonProps>> = ({
  type,
  onClick,
  to,
  style,
  small,
  children,
  ...params
}) => {
  const colors = useThemeColors();
  const { theme } = useThemeStore();
  const router = useRouter();

  const handleClick = () => {
    if (typeof onClick !== "undefined") {
      onClick();
    } else if (typeof to !== "undefined") {
      router.push(to);
    }
  };

  const borderRadius = theme === "light" ? "100px" : "10px";

  switch (type) {
    case 1:
      return (
        <Primary
          $small={small}
          onClick={handleClick}
          style={{
            color: colors.background,
            ...style,
          }}
          {...params}
        >
          {children}
        </Primary>
      );
    case 2:
      return (
        <Secondary
          $small={small}
          onClick={handleClick}
          style={{
            ...style,
          }}
          {...params}
        >
          {children}
        </Secondary>
      );
    default:
      return (
        <BaseButton
          $small={small}
          onClick={handleClick}
          style={{
            ...style,
          }}
          {...params}
        >
          {children}
        </BaseButton>
      );
  }
};
