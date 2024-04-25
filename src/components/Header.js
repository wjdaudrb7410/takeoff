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
  FaUser,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
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
  margin-left: 20px;
  display: flex;
  flex-direction: row;
`;
const ModeButton = styled.button`
  width: 30px;
  height: 30px;
  margin-right: 20px;
  border-radius: 12px;
  border: none;
  &:hover {
    background-color: #4a5568;
    transition: 0.5s;
  }
  svg {
    color: gray;
    margin-top: 5px;
  }
  a {
    width: 100%;
  }
`;
const ButtonWrap = styled.div`
  display: flex;
`;
export const Header = () => {
  const navigate = useNavigate();
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
        <ButtonWrap>
          <ModeButton onClick={() => navigate(routes.Signin)}>
            <FaUser size={16} />
          </ModeButton>

          <ModeButton onClick={toggleTheme}>
            {ThemeMode === "light" ? <FaSun size={16} /> : <FaMoon size={16} />}
          </ModeButton>
        </ButtonWrap>
      </HeaderWrap>
    </>
  );
};
