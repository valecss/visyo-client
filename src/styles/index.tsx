import styled from "styled-components";

export const Spacings = {
  100: 2,
  150: 4,
  200: 6,
  250: 8,
  300: 12,
  350: 16,
  400: 18,
  600: 24,
  800: 32,
  1000: 64,
};

export const numberToPx: (v: number) => string = (v) => {
  return `${v}px`;
};

const LightModePalette = {
  background: "#EDF4F7",
  text: "#002635",
  primary: "#24CAE0",
  primaryHover: "#26B8CB",
  lightGray: "#DEEBF1",
};

const DarkModePalette = {
  background: "#071419",
  text: "#A4E6EF",
  primary: "#24CAE0",
  primaryHover: "#26B8CB",
  lightGray: "#DEEBF1",
};

export const BaseColors = {
  black: "#000",
  white: "#fff",
  light: LightModePalette,
  dark: DarkModePalette,
};

export const Colors = (theme: "light" | "dark") => {};
