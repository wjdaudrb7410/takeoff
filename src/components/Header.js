import { PiAirplaneTakeoffFill } from "react-icons/pi";
import styled from "styled-components";
import { useTheme } from "../themeProvider";
import { Color } from "../GlobalStyle";
import {
  FaLock,
  FaLockOpen,
  FaMoon,
  FaRegistered,
  FaSun,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { routes } from "../routes";
import { BiRegistered } from "react-icons/bi";
import { FaPeopleGroup } from "react-icons/fa6";
const HeaderWrap = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
`;
const Title = styled.h1`
  font-size: 18px;
  top: 26px;
  right: 14px;
  position: relative;
  color: ${Color.Title};
  font-weight: 700;
`;
const TitleWrap = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: row;
`;
const ModeButton = styled.button`
  width: 40px;
  height: 40px;
  margin-right: 10px;
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
            <PiAirplaneTakeoffFill size={50} color={Color.Title} />
            <Title>Take OFF</Title>
          </TitleWrap>
        </Link>
        <div>
          <Link to={routes.Signup}>
            <ModeButton>
              <FaPeopleGroup size={25} />
            </ModeButton>
          </Link>
          <Link to={routes.Signin}>
            <ModeButton>
              <FaLock size={25} />
            </ModeButton>
          </Link>
          <ModeButton onClick={toggleTheme}>
            {ThemeMode === "light" ? <FaSun size={25} /> : <FaMoon size={25} />}
          </ModeButton>
        </div>
      </HeaderWrap>
    </>
  );
};
