import { useRouter } from "next/router";
import styled from "styled-components";
import { AppButton } from "../Button";
import { PropsWithChildren, useState } from "react";
import { Body } from "../Typography";
import { useThemeStore } from "@/hooks/useTheme";
import { HFlex, VFlex } from "../Flex";
import { FeatureCard } from "../Card";

const Item = styled(HFlex)<{ $theme: "light" | "dark"; $active?: boolean }>`
  align-items: center;
  padding-inline: 8px;
  padding-block: 4px;

  background-color: ${({ $active, $theme }) =>
    !$active
      ? "transparent"
      : $theme === "light"
      ? "rgba(0, 0, 0, .05)"
      : "rgba(255, 255, 255, .05)"};

  cursor: pointer;

  transition: all 0.2s;
  &:hover {
    background-color: rgba(
      ${({ $theme }) => ($theme === "light" ? "0,0,0" : "255, 255, 255")},
      0.1
    );
  }
`;

type SelectorProps = {
  footer?: boolean;
};

export const LanguageSelectorPin: React.FC<
  PropsWithChildren<SelectorProps>
> = ({ footer, ...props }) => {
  const router = useRouter();
  const { theme } = useThemeStore();
  const languages = [
    {
      code: "it",
      name: "Italiano",
      emoji: "🇮🇹",
    },
    {
      code: "en",
      name: "English (US)",
      emoji: "🇺🇸",
    },
  ];

  const [showMenu, setShowMenu] = useState(false);

  const changeLanguage = (locale: string) => {
    if (locale !== router.locale)
      router.push(router.pathname, router.asPath, { locale });
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <VFlex style={{ position: "relative" }}>
      <AppButton
        type={3}
        style={{
          gap: "4px",
          maxHeight: "32px",
          height: "100%",
          paddingInline: "8px",
          paddingBlock: 0,
          backgroundColor:
            theme === "light"
              ? footer
                ? "rgba(255, 255, 255, .2)"
                : "rgba(255, 255, 255, .6)"
              : "#1F343A",
        }}
        onClick={toggleMenu}
      >
        <Body style={{ fontSize: "24px" }}>
          {languages.find((el) => router.locale === el.code)?.emoji}
        </Body>
        <img
          src={
            theme === "dark" || footer
              ? "/svg/language-selector-arrow-light.svg"
              : "/svg/language-selector-arrow.svg"
          }
          alt="arrow"
          style={{
            transform: showMenu ? "rotate(180deg)" : "rotate(0)",
            transition: "all .2s",
          }}
        />
      </AppButton>
      <FeatureCard
        elevation={2}
        style={{
          borderRadius: "8px",
          position: "absolute",
          bottom: !showMenu ? "50%" : !footer ? "-12px" : "48px",
          transform: !footer ? "translate(0%, 100%)" : "translate(0)",
          transition: "all .2s",
          right: 0,
          opacity: !showMenu ? 0 : 1,
          pointerEvents: !showMenu ? "none" : "all",
          gap: 0,
          padding: 0,
          paddingBlock: "4px",
          width: "fit-content",
        }}
      >
        {languages.map((el) => (
          <Item
            $theme={theme}
            key={el.code}
            $active={el.code === router.locale}
            onClick={() => changeLanguage(el.code)}
          >
            <Body style={{ whiteSpace: "nowrap", fontSize: "18px" }}>
              <span
                style={{
                  fontSize: "24px",
                  position: "relative",
                }}
              >
                {el.emoji}
              </span>{" "}
              {el.name}
            </Body>
          </Item>
        ))}
      </FeatureCard>
    </VFlex>
  );
};
