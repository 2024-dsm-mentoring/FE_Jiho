export const Fonts: { [key in any]: React.CSSProperties } = {
  Headline1: {
    fontSize: "36px",
    fontWeight: 500,
    lineHeight: "50px",
  },
  Headline2: {
    fontSize: "30px",
    fontWeight: 500,
    lineHeight: "42px",
  },
  Headline3: {
    fontSize: "24px",
    fontWeight: 500,
    lineHeight: "34px",
  },
  Title1: {
    fontSize: "22px",
    fontWeight: 700,
    lineHeight: "34px",
  },
  Title2: {
    fontSize: "22=0px",
    fontWeight: 700,
    lineHeight: "32px",
  },
  Title3: {
    fontSize: "18px",
    fontWeight: 700,
    lineHeight: "28px",
  },
  Body1: {
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "28px",
  },
  Body2: {
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "26px",
  },
  Body3: {
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "22px",
  },
} as const;

export type fontsKeyOfType = keyof typeof Fonts;
