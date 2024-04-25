import styled from "styled-components";
import { Header } from "./Header";

import { useForm } from "react-hook-form";
import { FaUnlock, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { routes } from "../routes";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import { Containers, ErrText } from "./Container";

const LoginForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  svg {
    position: relative;
    top: 40px;
    left: 5px;
  }
`;
const LogInput = styled.input`
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
  font-size: 16px;
  margin-top: 30px;
  width: 100%;
  height: 50px;
  border: 1px solid gray;
  border-radius: 20px;
  align-self: center;
  background-color: white;
  transition: 0.5s;
  &:hover {
    background-color: #a0aec0;
  }
`;
const LoginTItle = styled.div`
  align-self: flex-start;
  p {
    font-size: 18px;
  }
  p:nth-child(2) {
    opacity: 0.7;
    margin-top: 10px;
    font-size: 12px;
    letter-spacing: 0;
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
                <MdEmail size={30} />
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
            <FaUser size={30} />
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
            <FaUnlock size={30} />
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
        </FormWrap>
      </Containers>
    </>
  );
};
