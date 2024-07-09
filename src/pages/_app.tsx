import { VFlex } from "@/components/Flex";
import { AppNavbar } from "@/components/NavBar";
import { appWithTranslation } from "next-i18next";
import { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import { useThemeColors } from "@/hooks/useTheme";
import { AppFooter } from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

function VisyoApp({ Component, pageProps }: AppProps) {
  const colors = useThemeColors();

  return (
    <>
      <VFlex
        $fill
        className={montserrat.className}
        style={{ backgroundColor: colors.background, color: colors.text }}
      >
        <AppNavbar />
        <Component {...pageProps} />
        <AppFooter />
      </VFlex>
    </>
  );
}

export default appWithTranslation(VisyoApp);
