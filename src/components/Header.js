import { PiAirplaneTakeoffFill } from "react-icons/pi";
import styled from "styled-components";
import { useTheme } from "../themeProvider";
import { Color } from "../GlobalStyle";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import { routes } from "../routes";
const HeaderWrap = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
`;
const Title = styled.h1`
  font-size: 28px;
  top: 26px;
  right: 14px;
  position: relative;
  color: ${Color.Title};
  font-weight: 700;
`;
const TitleWrap = styled.div`
  display: flex;
  flex-direction: row;
`;
const ModeButton = styled.button`
  width: 40px;
  height: 40px;
  margin-right: 20px;
  border-radius: 12px;
  border: none;
  &:hover {
    background-color: #4a5568;
    transition: 0.5s;
  }
  svg {
    margin-top: 5px;
  }
`;
export const Header = () => {
  const [ThemeMode, toggleTheme] = useTheme();
  return (
    <>
      <HeaderWrap>
        <Link to={routes.home}>
          <TitleWrap>
            <PiAirplaneTakeoffFill size={60} color={Color.Title} />
            <Title>Take OFF</Title>
          </TitleWrap>
        </Link>

        <ModeButton onClick={toggleTheme}>
          {ThemeMode === "light" ? <FaSun size={25} /> : <FaMoon size={25} />}
        </ModeButton>
      </HeaderWrap>
    </>
  );
};
