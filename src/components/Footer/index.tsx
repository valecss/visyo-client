import { useThemeColors, useThemeStore } from "@/hooks/useTheme";
import { HFlex, VFlex } from "../Flex";
import { Body } from "../Typography";
import { Footer } from "./styles";
import { BaseColors } from "@/styles";
import { AppButton } from "../Button";
import { useState } from "react";
import { LanguageSelectorPin } from "../LanguageSelector";

export const AppFooter: React.FC = () => {
  const { theme } = useThemeStore();

  const date = new Date();
  const [year, setYear] = useState(date.getFullYear());

  return (
    <Footer $theme={theme} style={{ marginTop: "160px" }}>
      <VFlex style={{ gap: "48px", alignItems: "flex-start" }} $fill>
        <HFlex
          $fill
          style={{
            justifyContent: "space-between",
            gap: "32px",
            alignItems: "flex-start",
          }}
        >
          <VFlex
            style={{
              gap: "10px",
              maxWidth: "220px",
              alignItems: "flex-start",
              color: "#DEEBF1",
            }}
          >
            <img
              src="/svg/visyo-logo-light.svg"
              alt="Visyo Logo"
              style={{ height: "40px" }}
            />
            <Body style={{ fontSize: "14px", fontWeight: 500, opacity: 0.6 }}>
              revolutionize charitable giving through the power of Web3
              technology
            </Body>
          </VFlex>
          <AppButton
            type={1}
            style={{ color: BaseColors.dark.background }}
            small
          >
            Get in touch
          </AppButton>
        </HFlex>
      </VFlex>
      <HFlex style={{ justifyContent: "space-between", gap: "32px" }} $fill>
        <Body
          style={{
            fontSize: "14px",
            fontWeight: 500,
            opacity: 0.6,
            color: "#DEEBF1",
          }}
        >
          {`© ${year} Visyo. All rights reserved.`}
        </Body>
        <LanguageSelectorPin footer />
      </HFlex>
    </Footer>
  );
};
