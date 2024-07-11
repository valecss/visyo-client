import { PropsWithChildren, useCallback, useEffect } from "react";
import { Nav, NavItem, NavigationFlex } from "./styles";
import { HFlex, VFlex } from "../Flex";
import { AppButton, BaseButtonAnimation } from "../Button";

import NextLink from "next/link";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { useThemeColors, useThemeStore } from "@/hooks/useTheme";
import { useNavbarMenu } from "@/hooks/useNavMenu";
import { FeatureCard } from "../Card";
import { Body } from "../Typography";
import { LanguageSelectorPin } from "../LanguageSelector";
import { useRouter } from "next/router";
import styled from "styled-components";

type NavbarProps = {};

const HomeItem = styled(NextLink)`
  opacity: 1;
  transition: all 0.2s;

  &:focus {
    animation: 0.2s ${BaseButtonAnimation};
  }

  &:hover {
    opacity: 0.6;
  }
`;

export const AppNavbar: React.FC<PropsWithChildren<NavbarProps>> = ({
  children,
  ...props
}) => {
  const { theme } = useThemeStore();
  const { visible, toggle } = useNavbarMenu();
  const colors = useThemeColors();
  const router = useRouter();
  const { width } = useWindowDimensions();
  const routes = [
    {
      name: "Associations",
      to: "/associations",
    },
    {
      name: "Whitepaper",
      to: "/docs/visyo-whitepaper.pdf",
    },
    {
      name: "Roadmap",
      to: "/roadmap",
    },
    {
      name: "News",
      to: "/latest-insights",
    },
  ];

  useEffect(() => {
    if (width > 950 && visible) {
      toggle();
    }
  }, [width, visible]);

  return (
    <Nav
      $theme={theme}
      style={{ alignItems: "center", justifyContent: "center" }}
    >
      <HFlex
        $fill
        style={{
          justifyContent: "space-between",
          maxWidth: "1400px",
          zIndex: 1,
        }}
      >
        <HFlex
          style={{
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "24px",
          }}
        >
          <HomeItem href="/" title="Homepage">
            <img
              src={
                theme === "light"
                  ? "/svg/visyo-logo-main.svg"
                  : "/svg/visyo-logo-light.svg"
              }
              alt="Visyo"
              style={{ height: "40px" }}
            />
          </HomeItem>
          {width <= 1220 && width > 900 && (
            <NavigationFlex
              style={{
                position: "relative",
                transform: "translate(0)",
                top: 0,
                left: 0,
              }}
            >
              {routes.map((el) => (
                <NavItem
                  href={el.to}
                  $active={router.pathname.includes(el.to)}
                  style={{ color: colors.text }}
                  key={el.name}
                >
                  {el.name}
                </NavItem>
              ))}
            </NavigationFlex>
          )}
        </HFlex>
        {width > 1220 && (
          <NavigationFlex>
            {routes.map((el) => (
              <NavItem
                href={el.to}
                $active={router.pathname.includes(el.to)}
                style={{ color: colors.text }}
                key={el.name}
              >
                {el.name}
              </NavItem>
            ))}
          </NavigationFlex>
        )}
        <HFlex
          style={{
            justifyContent: "flex-end",
            gap: "12px",
            alignItems: "center",
          }}
        >
          {width > 540 && <ThemeSwitcher />}
          {width > 400 && <LanguageSelectorPin />}
          {width > 352 && (
            <AppButton type={1} small>
              Get in touch
            </AppButton>
          )}
          {width <= 900 && (
            <AppButton type={3} style={{ padding: 0 }} onClick={toggle}>
              {!visible ? (
                <img
                  src={
                    theme === "light" ? "/svg/menu.svg" : "/svg/menu-light.svg"
                  }
                  alt="Menu"
                />
              ) : (
                <img
                  src={
                    theme === "light"
                      ? "/svg/cross.svg"
                      : "/svg/cross-light.svg"
                  }
                  alt="Close menu"
                />
              )}
            </AppButton>
          )}
        </HFlex>
      </HFlex>
      {width <= 900 && (
        <FeatureCard
          elevation={2}
          style={{
            position: "absolute",
            borderRadius: "8px",
            flexDirection: width <= 400 ? "column" : "row",
            justifyContent: "space-between",
            alignItems: "stretch",
            bottom: visible ? "12px" : "100%",
            transform: "translateY(100%)",
            width: width > 500 ? "fit-content" : "100%",
            gap: "32px",
            maxWidth: "calc(100% - 32px)",
            right: width > 765 ? "24px" : "16px",
            opacity: visible ? 1 : 0,
            transition: "all .3s",
            overflow: "visible",
            pointerEvents: visible ? "all" : "none",
          }}
        >
          <VFlex style={{ gap: "12px" }} $fill>
            {routes.map((el) => (
              <NavItem
                href={el.to}
                $active={router.pathname.includes(el.to)}
                style={{
                  color: colors.text,
                  fontSize: "16px",
                  textAlign: width <= 350 ? "center" : "left",
                }}
                key={el.name}
              >
                {el.name}
              </NavItem>
            ))}
          </VFlex>
          <VFlex
            $fill
            style={{
              alignItems: width <= 350 ? "center" : "flex-end",
              gap: "12px",
              justifyContent: "space-between",
            }}
          >
            <div>
              {width <= 352 && (
                <AppButton type={1} small>
                  Get in touch
                </AppButton>
              )}
            </div>
            <VFlex
              $fill={width <= 400}
              style={{
                gap: "6px",
                alignItems: width <= 400 ? "center" : "flex-end",
                justifyContent: width <= 400 ? "space-between" : "flex-start",
              }}
            >
              {width <= 540 && (
                <HFlex
                  $fill
                  style={{
                    flexDirection: width <= 350 ? "column" : "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <Body
                    style={{ fontSize: "14px", opacity: 0.6, fontWeight: 500 }}
                  >
                    Theme
                  </Body>
                  <ThemeSwitcher />
                </HFlex>
              )}
              {width <= 400 && (
                <HFlex
                  $fill
                  style={{
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "6px",
                  }}
                >
                  <Body
                    style={{ fontSize: "14px", opacity: 0.6, fontWeight: 500 }}
                  >
                    Language
                  </Body>
                  <LanguageSelectorPin />
                </HFlex>
              )}
            </VFlex>
          </VFlex>
        </FeatureCard>
      )}
    </Nav>
  );
};
