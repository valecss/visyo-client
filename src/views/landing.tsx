import { AppSection } from "@/components/AppSection";
import { AppButton } from "@/components/Button";
import { FeatureCard } from "@/components/Card";
import { HFlex, VFlex } from "@/components/Flex";
import { Pin } from "@/components/Pin";
import { Body, Heading1, Heading2, Heading3 } from "@/components/Typography";
import { useThemeStore } from "@/hooks/useTheme";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { BaseColors, Spacings, numberToPx } from "@/styles";
import styled from "styled-components";

import tokenomics from "@/data/tokenomics";

const TokenomicsDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 10px;
`;

const BackgroundFiller = styled.div<{ $theme?: "light" | "dark" }>`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 234px;
  background-image: ${({ $theme }) => `linear-gradient(
    0deg,
    ${$theme === "light" ? "#edf4f7" : "#071419"} 25%,
    rgba(237, 244, 247, 0)
  )`};
`;

const LandingPage = () => {
  const { theme } = useThemeStore();
  const { width } = useWindowDimensions();

  const ids: string[] = [];
  tokenomics.forEach((el) => {
    if (!ids.includes(el.id)) ids.push(el.id);
  });

  return (
    <VFlex
      $fill
      style={{
        gap: "32px",
        paddingTop: "48px",
        marginTop: width < 765 ? "100px" : 0,
      }}
    >
      {/* HERO SECTION */}
      <AppSection
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: 0,
        }}
      >
        {width <= 765 && (
          <VFlex
            $fill
            style={{
              marginBottom: "-10%",
              position: "relative",
            }}
          >
            <BackgroundFiller $theme={theme} />
            <video
              src="/videos/hero.webm"
              style={{ pointerEvents: "none" }}
              autoPlay
              muted
              loop
            />
            {/* <img
              src="/images/hero-placeholder.png"
              alt="placeholder"
              style={{ maxWidth: "100%" }}
            /> */}
          </VFlex>
        )}
        <HFlex
          style={{
            minHeight: width > 765 ? "600px" : "auto",
            alignItems: "center",
            zIndex: 1,
            maxWidth: "1400px",
          }}
          $fill
        >
          <VFlex
            $fill
            style={{
              maxWidth: width < 765 ? "100%" : width < 1200 ? "50%" : "60%",
              gap: numberToPx(width < 765 ? 24 : 32),
              /* maxWidth: "700px", */
            }}
          >
            <VFlex $fill style={{ gap: numberToPx(Spacings[400]) }}>
              <VFlex style={{ gap: "4px" }}>
                <Heading1>
                  Your{" "}
                  <span style={{ color: BaseColors.light.primary }}>voice</span>
                  , your{" "}
                  <span style={{ color: BaseColors.light.primary }}>
                    choice
                  </span>
                </Heading1>
                <Heading3 style={{ fontWeight: 600 }}>
                  Direct your{" "}
                  <span style={{ color: BaseColors.light.primary }}>
                    donations
                  </span>{" "}
                  with Blockchain Transparency
                </Heading3>
              </VFlex>
              <Body style={{ maxWidth: "600px" }}>
                Our mission is to revolutionize charitable giving through the
                power of Web3 technology. We aim to build a transparent and
                secure ecosystem where every donation is trackable and easily
                managed on a decentralized platform.
              </Body>
            </VFlex>
            <HFlex
              $fill={width < 500}
              style={{
                gap: numberToPx(width < 765 ? Spacings[300] : Spacings[350]),
              }}
            >
              <AppButton
                type={1}
                small={width < 350}
                style={{
                  width: width < 500 ? "100%" : "fit-content",
                  justifyContent: width < 500 ? "center" : "flex-start",
                }}
              >
                Create an account
              </AppButton>
              <AppButton
                type={2}
                small={width < 350}
                style={{
                  width: width < 500 ? "100%" : "fit-content",
                  justifyContent: width < 500 ? "center" : "flex-start",
                }}
              >
                {width > 350 && <img src="/svg/document.svg" alt="Document" />}
                Learn more
              </AppButton>
            </HFlex>
          </VFlex>
          {width > 765 && (
            <VFlex
              $fill
              style={{
                maxWidth: "40%",
                paddingLeft: width < 1200 ? "18px" : "64px",
                /* pointerEvents: "none", */
              }}
            >
              <video
                src="/videos/hero.webm"
                loop
                autoPlay
                muted
                width={width > 1200 ? 800 : 600}
                height={width > 1200 ? 630 : 430}
                style={{
                  transform: `translateY(${width <= 1200 ? "20%" : "0"}px)`,
                }}
              />
              {/*  <img
                src="/images/hero-placeholder.png"
                alt="placeholder"
                style={{
                  width: numberToPx(width > 1200 ? 800 : 600),
                  height: numberToPx(width > 1200 ? 630 : 430),
                  transform: `translateY(${width <= 1200 ? "20%" : "0"}px)`,
                }} */}
            </VFlex>
          )}
        </HFlex>
      </AppSection>

      {/* FEATURES SECTION */}
      <AppSection
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 0,
          overflow: "visible",
          paddingBlock: "64px",
        }}
      >
        <HFlex
          $fill
          $switchFlex={width < 765}
          style={{
            maxWidth: "1100px",
            gap: width < 765 ? "12px" : "16px",
            backgroundImage: "url(/images/feature-section-bg.png)",
            backgroundPosition: "center",
            backgroundSize: "130%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <FeatureCard
            style={{
              height: "fit-content",
            }}
          >
            <video
              src="/videos/blockchain.webm"
              style={{
                maxWidth: "100%",
                overflow: "clip",
                borderRadius: "8px",
                pointerEvents: "none",
              }}
              muted
              autoPlay
              loop
            />
            <VFlex $fill style={{ gap: "18px" }}>
              <VFlex style={{ gap: "10px" }}>
                <Heading3>
                  Transparent and secure donations with{" "}
                  <span style={{ color: BaseColors.light.primary }}>
                    Blockchain
                  </span>{" "}
                  Technology
                </Heading3>
                <Body>
                  By harnessing the capabilities of blockchain, we ensure that
                  funds are utilized efficiently and directly benefit those in
                  need without intermediaries. Join us in transforming
                  philanthropy with CharityToken, where your contributions are
                  safe, transparent, and make a real impact.
                </Body>
              </VFlex>
              <AppButton type={2} small={width < 1200}>
                <img src="/svg/document.svg" alt="Document" />
                Read More
              </AppButton>
            </VFlex>
          </FeatureCard>

          <VFlex
            $fill
            style={{
              gap: width < 765 ? "12px" : "16px",
              alignItems: "stretch",
            }}
          >
            <FeatureCard
              style={{
                height: "fit-content",
                position: "relative",
              }}
            >
              <VFlex
                $fill
                style={{
                  gap: "18px",
                  maxWidth:
                    (width >= 765 && width < 1200) || width < 350
                      ? "100%"
                      : width > 800
                      ? "230px"
                      : "55%",
                  zIndex: 1,
                }}
              >
                <VFlex style={{ gap: "10px" }}>
                  <Heading3>
                    Meet $
                    <span style={{ color: BaseColors.light.primary }}>
                      VYUSD
                    </span>
                  </Heading3>
                  <Body>
                    By harnessing the capabilities of blockchain, we ensure that
                    funds are utilized efficiently and directly benefit those in
                    need without intermediaries. <br />
                    <br />
                    By harnessing the capabilities of blockchain, we ensure that
                    funds
                  </Body>
                </VFlex>
                <AppButton
                  type={2}
                  small={width < 1200}
                  to="/docs/visyo-whitepaper.pdf"
                >
                  <img src="/svg/document.svg" alt="Document" />
                  Whitepaper
                </AppButton>
              </VFlex>
              {width > 350 && (
                <img
                  src="/images/token-placeholder.png"
                  alt="Visyo Token"
                  style={{
                    position:
                      width < 765 || width > 1200 ? "absolute" : "relative",
                    marginTop: "-120px",
                    bottom: width >= 900 ? "-28px" : "-18px",
                    right: width < 500 ? "-100px" : "calc(-5% - 32px)",
                    zIndex: 0,
                    maxWidth: "100%",
                  }}
                />
              )}
            </FeatureCard>
            <FeatureCard style={{ padding: 0, height: "fit-content" }}>
              {width < 1200 && (
                <video
                  src="/videos/dao-explain.webm"
                  style={{ maxHeight: "300px", pointerEvents: "none" }}
                  muted
                  autoPlay
                  loop
                />
              )}
              <HFlex $fill style={{ alignItems: "stretch" }}>
                {width >= 1200 && (
                  <VFlex $fill>
                    <video
                      src="/videos/dao-explain.webm"
                      style={{
                        maxWidth: "100%",
                        pointerEvents: "none",
                        height: "100%",
                      }}
                      muted
                      autoPlay
                      loop
                    />
                  </VFlex>
                )}
                <VFlex $fill style={{ gap: "18px", padding: "16px" }}>
                  <VFlex style={{ gap: "10px" }}>
                    <Heading3>
                      Governance System through our{" "}
                      <span style={{ color: BaseColors.light.primary }}>
                        DAO
                      </span>
                    </Heading3>
                    <Body>
                      By harnessing the capabilities of blockchain, we ensure
                      that funds are utilized efficiently and directly benefit
                      those in need without intermediaries. <br />
                    </Body>
                  </VFlex>
                  <AppButton type={2} small={width < 1200}>
                    <img src="/svg/document.svg" alt="Document" />
                    Read More
                  </AppButton>
                </VFlex>
              </HFlex>
            </FeatureCard>
          </VFlex>
        </HFlex>
      </AppSection>

      {/* Tokenomics Section */}
      <AppSection
        style={{
          marginTop: width > 765 ? "42px" : 0,
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: "32px",
        }}
      >
        <HFlex
          $switchFlex={width < 765}
          $fill
          style={{
            maxWidth: "1100px",
            gap: width > 765 ? "32px" : 0,
            justifyContent: "space-between",
          }}
        >
          <VFlex
            $fill
            style={{
              gap: width < 765 ? "24px" : "32px",
              maxWidth: width > 1100 ? "551px" : width > 750 ? "50%" : "100%",
              zIndex: 1,
            }}
          >
            <VFlex style={{ gap: "18px" }}>
              <VFlex style={{ gap: "8px" }}>
                <Pin>TOKENOMICS</Pin>
                <Heading2>
                  Understanding <br />
                  <span
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, #2F7E99, #24CAE0)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    CharityToken
                  </span>
                </Heading2>
              </VFlex>
              <Body>
                CharityToken is designed with a robust tokenomics structure that
                ensures transparency, security, and efficiency in charitable
                donations. The total supply of tokens is capped, preventing
                inflation and ensuring the value remains stable.
              </Body>
            </VFlex>
            <FeatureCard
              style={{
                flexDirection: width < 1440 ? "column" : "row",
                paddingInline: 0,
                paddingBlock: width < 1440 ? 0 : "12px",
                gap: 0,
              }}
            >
              <VFlex
                style={{
                  gap: "4px",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingBlock: width < 1440 ? "12px" : 0,
                }}
                $fill
              >
                <Body style={{ opacity: 0.6, fontWeight: 400 }}>
                  Total supply
                </Body>
                <Body style={{ fontSize: "24px", fontWeight: 600 }}>
                  1.000 MLN
                </Body>
              </VFlex>
              <VFlex
                style={{
                  gap: "4px",
                  alignItems: "center",
                  justifyContent: "center",
                  borderInline: `1px solid ${
                    width < 1440
                      ? "transparent"
                      : theme === "light"
                      ? "rgba(0, 0, 0, .1)"
                      : "rgba(164, 230, 239, .1)"
                  }`,
                  borderBlock: `1px solid ${
                    width > 1440
                      ? "transparent"
                      : theme === "light"
                      ? "rgba(0, 0, 0, .1)"
                      : "rgba(164, 230, 239, .1)"
                  }`,
                  paddingBlock: width < 1440 ? "12px" : 0,
                }}
                $fill
              >
                <Body style={{ opacity: 0.6, fontWeight: 400 }}>
                  Total supply
                </Body>
                <Body style={{ fontSize: "24px", fontWeight: 600 }}>
                  1.000 MLN
                </Body>
              </VFlex>
              <VFlex
                style={{
                  gap: "4px",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingBlock: width < 1440 ? "12px" : 0,
                }}
                $fill
              >
                <Body style={{ opacity: 0.6, fontWeight: 400 }}>
                  Total supply
                </Body>
                <Body style={{ fontSize: "24px", fontWeight: 600 }}>
                  1.000 MLN
                </Body>
              </VFlex>
            </FeatureCard>

            {width > 765 && (
              <HFlex style={{ gap: "24px", flexWrap: "wrap" }}>
                {ids.map((el) => (
                  <VFlex key={el} style={{ gap: "12px" }}>
                    {tokenomics
                      .filter((t) => t.id === el)
                      .map((t) => (
                        <HFlex
                          style={{ alignItems: "center", gap: "6px" }}
                          key={t.name}
                        >
                          <TokenomicsDot style={{ backgroundColor: t.color }} />
                          <Body style={{ fontWeight: 500, fontSize: "14px" }}>
                            {`${t.name}`}
                          </Body>
                        </HFlex>
                      ))}
                  </VFlex>
                ))}
              </HFlex>
            )}
          </VFlex>
          {width > 765 && (
            <VFlex
              $fill
              style={{
                alignItems: "flex-end",
                padding: "24px",
                maxWidth: "40%",
              }}
            >
              <img
                src="/images/tokenomics-placeholder.png"
                alt="Placeholder"
                style={{
                  height: "400px",
                  position: "relative",
                  left: width < 1150 ? "87%" : "50%",
                  marginTop: "140px",
                }}
              />
            </VFlex>
          )}
          {width <= 765 && (
            <VFlex $fill style={{ marginTop: "-32px" }}>
              <img
                src="/images/tokenomics-placeholder.png"
                alt="Placeholder"
                style={{
                  width: "130%",
                  transform: "translateX(10%)",
                }}
              />
            </VFlex>
          )}
          {width <= 765 && (
            <HFlex style={{ gap: "24px", flexWrap: "wrap", marginTop: "16px" }}>
              <VFlex style={{ gap: "12px" }}>
                {tokenomics
                  .filter((t) => t.id === "#sale" || t.id === "#system")
                  .map((t) => (
                    <HFlex
                      key={t.name}
                      style={{ alignItems: "center", gap: "6px" }}
                    >
                      <TokenomicsDot style={{ backgroundColor: t.color }} />
                      <Body style={{ fontWeight: 500, fontSize: "14px" }}>
                        {`${t.name} (${t.percent}%)`}
                      </Body>
                    </HFlex>
                  ))}
              </VFlex>
              <VFlex style={{ gap: "12px" }}>
                {tokenomics
                  .filter((t) => t.id === "#production" || t.id === "#intern")
                  .map((t) => (
                    <HFlex
                      key={t.name}
                      style={{ alignItems: "center", gap: "6px" }}
                    >
                      <TokenomicsDot style={{ backgroundColor: t.color }} />
                      <Body style={{ fontWeight: 500, fontSize: "14px" }}>
                        {`${t.name} (${t.percent}%)`}
                      </Body>
                    </HFlex>
                  ))}
              </VFlex>
            </HFlex>
          )}
        </HFlex>
      </AppSection>

      {/* Partners Section */}
      <AppSection
        style={{
          justifyContent: "flex-start",
        }}
      >
        <VFlex $fill style={{}}>
          <VFlex style={{ gap: "18px", maxWidth: "600px" }}>
            <Heading2>
              <span
                style={{
                  backgroundImage: "linear-gradient(90deg, #2F7E99, #24CAE0)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Certified
              </span>{" "}
              Partner
              <br /> Associations
            </Heading2>
            <Body>
              CharityToken is designed with a robust tokenomics structure that
              ensures transparency, security, and efficiency in charitable
              donations.
            </Body>
          </VFlex>
          <HFlex style={{ gap: "24px" }}></HFlex>
        </VFlex>
      </AppSection>

      {/* Blog Section */}
      <AppSection
        style={{
          marginTop: "128px",
          justifyContent: "flex-start",
        }}
      >
        <VFlex $fill style={{}}>
          <VFlex style={{ gap: "18px", maxWidth: "600px" }}>
            <Heading2>
              Latest{" "}
              <span
                style={{
                  backgroundImage: "linear-gradient(90deg, #2F7E99, #24CAE0)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                insights
              </span>{" "}
              from our blog
            </Heading2>
            <Body>
              CharityToken is designed with a robust tokenomics structure that
              ensures transparency, security, and efficiency in charitable
              donations.
            </Body>
          </VFlex>
          <HFlex style={{ gap: "24px" }}></HFlex>
        </VFlex>
      </AppSection>
    </VFlex>
  );
};

export default LandingPage;
