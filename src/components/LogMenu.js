import styled from "styled-components";
import { Header } from "./Header";

import { useForm } from "react-hook-form";
import { FaUnlock, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../routes";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import { Containers, ErrText } from "./Container";

const LoginForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  svg {
    color: ${({ theme }) => theme.placeholder};
    position: relative;
    top: 35px;
    left: 10px;
  }
`;
const LogInput = styled.input`
  margin-bottom: -10px;
  padding: 0 35px;
  font-size: 16px;
  height: 50px;
  border-radius: 20px;
`;
const FormWrap = styled.div`
  width: 100%;
  height: 100vh;
  margin: 50px 0;
  padding: 0 20px;
`;
const LoginButton = styled.button`
  font-size: 18px;
  margin-top: 35px;
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 20px;
  align-self: center;
  background-color: ${({ theme }) => theme.LoginBtnBg};
  text-transform: uppercase;
  color: ${({ theme }) => theme.LoginBtnText};
  cursor: pointer;
  transition: all 0.5s ease 0s;
  &:hover {
    background-color: ${({ theme }) => theme.LoginBtnHover};
  }
`;
const LoginTItle = styled.div`
  align-self: flex-start;
  p:nth-child(1) {
    font-size: 40px;
    text-transform: uppercase;
    font-weight: 600;
  }
  p:nth-child(2) {
    text-transform: capitalize;
    font-weight: 400;
    letter-spacing: 0px;
    opacity: 0.7;
    margin-top: 15px;
    font-size: 14px;
    letter-spacing: 0;
  }
`;
const DividerWrap = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  font-weight: 300;
  font-size: 12px;
  color: RGBA(0, 0, 0, 0.16);
  &::before,
  &::after {
    content: "";
    flex-grow: 1;
    background: RGBA(0, 0, 0, 0.16);
    height: 0.5px;
    font-size: 0px;
    line-height: 0px;
    margin: 0px 16px;
  }
`;
const NextText = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  letter-spacing: -1px;
  margin-top: 10px;
  font-size: 14px;
  color: RGBA(0, 0, 0, 0.24);
  text-align: center;
  p:nth-child(2) {
    margin-left: 5px;
    a {
      text-decoration: underline;
    }
  }
`;
export const LogMenu = ({ isLog }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    navigate(routes.home);
  };
  return (
    <>
      <Containers>
        <Header />
        <FormWrap>
          <LoginTItle>
            {isLog === true ? (
              <>
                <p>Register</p>
                <p>To You can go wherever you want to go.</p>
              </>
            ) : (
              <>
                <p>Login</p>
                <p>To You can go wherever you want to go.</p>
              </>
            )}
          </LoginTItle>

          <LoginForm onSubmit={handleSubmit(onSubmit)}>
            {isLog === true ? (
              <>
                <MdEmail size={18} />
                <LogInput
                  type="email"
                  placeholder="e-mail"
                  {...register("email", {
                    required: "이메일을 입력해주세요",
                    minLength: {
                      value: 2,
                      message: "2자리 이상 입력해주세요",
                    },
                  })}
                ></LogInput>
                <ErrText>{errors?.email?.message}</ErrText>
              </>
            ) : (
              <></>
            )}
            <FaUser size={18} />
            <LogInput
              type="text"
              placeholder="username"
              {...register("username", {
                required: "아이디를 입력해주세요",
                minLength: {
                  value: 2,
                  message: "2자리 이상 입력해주세요",
                },
              })}
            ></LogInput>
            <ErrText>{errors?.username?.message}</ErrText>
            <FaUnlock size={18} />
            <LogInput
              type="password"
              placeholder="password"
              {...register("password", {
                required: "비밀번호를 입력해주세요",
                minLength: {
                  value: 2,
                  message: "2자리 이상 입력해주세요",
                },
              })}
            ></LogInput>
            <ErrText>{errors?.password?.message}</ErrText>
            <LoginButton type="submit">
              {isLog === true ? <>Register</> : <>Login</>}
            </LoginButton>
          </LoginForm>
          <DividerWrap>OR</DividerWrap>
          {isLog === true ? (
            <>
              <NextText>
                <p>아이디가 이미 있으신가요?</p>
                <p>
                  <Link to={routes.Signin}>로그인</Link>
                </p>
              </NextText>
            </>
          ) : (
            <>
              <NextText>
                <p>아이디가 없으신가요?</p>
                <p>
                  <Link to={routes.Signup}>회원가입</Link>
                </p>
              </NextText>
            </>
          )}
        </FormWrap>
      </Containers>
    </>
  );
};
