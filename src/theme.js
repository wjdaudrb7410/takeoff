const windowSize = {
  small: `screen and (max-width: "600px")`,
  base: 'screen and (max-width: "768px")',
  large: 'screen and (max-width: "1024px")',
};
export const lightTheme = {
  bgColor: "#eee",
  textColor: "#1d1d1d",
  placeholder: "#dbdbdb",
  TitleIcon: "#76E4F7",
  ContentBg: "white",
  HeaderIconBg: "#718096",
  HeaderBtnBg: "#E2E8F0",
  HeaderBtnHover: "#4A5568",
  InputBg: "white",
  InputBorderColor: "gray",
  LoginBtnBg: "#76E4F7",
  LoginBtnText: "white",
  LoginBtnHover: "#eee",
  LoginNext: "RGBA(0, 0, 0, 0.24)",
};
export const DarkTheme = {
  bgColor: "#1d1d1d",
  textColor: "#eee",
  placeholder: "#eee",
  TitleIcon: "#eee",
  ContentBg: "#4A5568",
  HeaderIconBg: "#F7FAFC",
  HeaderBtnBg: "rgb(65,84,114)",
  HeaderBtnHover: "#A0AEC0",
  InputBg: "rgb(96,108,123)",
  InputBorderColor: "rgb(155,165,182)",
  LoginBtnBg: "rgb(99,140,192)",
  LoginBtnText: "rgb(255,255,255)",
  LoginBtnHover: "#76E4F7",
  LoginNext: "RGBA(255, 255, 255, 0.4)",
};
export const theme = {
  windowSize,
  lightTheme,
  DarkTheme,
};
export default theme;
