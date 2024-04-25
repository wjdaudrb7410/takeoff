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
};
export const DarkTheme = {
  bgColor: "#1d1d1d",
  textColor: "#eee",
  placeholder: "#eee",
  TitleIcon: "#eee",
  ContentBg: "#4A5568",
  HeaderIconBg: "#F7FAFC",
  HeaderBtnBg: "#76E4F7",
  HeaderBtnHover: "#A0AEC0",
  InputBg: "#A0AEC0",
  InputBorderColor: "#eee",
  LoginBtnBg: "#A0AEC0",
  LoginBtnText: "#1A202C",
  LoginBtnHover: "#76E4F7",
};
export const theme = {
  windowSize,
  lightTheme,
  DarkTheme,
};
export default theme;
