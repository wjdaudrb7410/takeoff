import { SpinnerCircular } from "spinners-react";

import styled from "styled-components";
import { Color } from "../GlobalStyle";
import { useTheme } from "../themeProvider";
const SpinnerWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.ContentBg};
`;
export const Loading = () => {
  const [ThemeMode] = useTheme();
  console.log(ThemeMode);
  return (
    <>
      <SpinnerWrap>
        <SpinnerCircular
          size={70}
          thickness={120}
          speed={100}
          color={ThemeMode === "light" ? Color.lightLoading : Color.darkLoading}
          secondaryColor={
            ThemeMode === "light" ? Color.lightLoadingbg : Color.darkLoadingbg
          }
          style={{ margin: "auto" }}
        />
      </SpinnerWrap>
    </>
  );
};
