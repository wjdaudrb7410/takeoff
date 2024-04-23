import { PiAirplaneTakeoffFill } from "react-icons/pi";
import styled from "styled-components";
import { useTheme } from "../themeProvider";
import { Color } from "../GlobalStyle";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import { routes } from "../routes";
const HeaderWrap = styled.div`
  margin-top: 30px;
  width: 400px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
`;
const Title = styled.h1`
  top: 20px;
  right: 12px;
  position: relative;
  color: ${Color.Title};
  font-weight: 700;
`;
const TitleWrap = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: row;
`;
const ModeButton = styled.button`
  margin-right: 20px;
  border-radius: 20px;
  border: none;
  margin-top: 10px;
  svg {
    padding-top: 1px;
  }
  &:hover {
    background-color: #4a5568;
    transition: 0.5s;
  }
`;
export const Header = () => {
  const [ThemeMode, toggleTheme] = useTheme();
  return (
    <>
      <HeaderWrap>
        <Link to={routes.home}>
          <TitleWrap>
            <PiAirplaneTakeoffFill size={40} color={Color.Title} />
            <Title>Take OFF</Title>
          </TitleWrap>
        </Link>

        <ModeButton onClick={toggleTheme}>
          {ThemeMode === "light" ? <FaSun /> : <FaMoon />}
        </ModeButton>
      </HeaderWrap>
    </>
  );
};
