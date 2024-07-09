import styled from "styled-components";

type FlexInterface = {
  $fill?: boolean;
  $switchFlex?: boolean;
};

export const VFlex = styled.div<FlexInterface>`
  display: flex;
  flex-direction: ${({ $switchFlex }) => ($switchFlex ? "row" : "column")};

  width: ${({ $fill }) => ($fill ? "100%" : "auto")};
`;

export const HFlex = styled.div<FlexInterface>`
  display: flex;
  flex-direction: ${({ $switchFlex }) => ($switchFlex ? "column" : "row")};

  width: ${({ $fill }) => ($fill ? "100%" : "auto")};
`;
