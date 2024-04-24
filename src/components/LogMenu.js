import styled from "styled-components";
import { Header } from "./Header";

import { useForm } from "react-hook-form";
import { FaUnlock, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { routes } from "../routes";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import { Containers } from "./Container";

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
  margin-top: 30px;
  width: 100%;
  height: 50px;
  align-self: center;
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
          <LoginForm onSubmit={handleSubmit(onSubmit)}>
            {isLog === true ? (
              <>
                <MdEmail size={30} />
                <LogInput
                  type="email"
                  placeholder="이메일"
                  {...register("email", {
                    required: "이메일을 입력해주세요",
                    minLength: {
                      value: 2,
                      message: "2자리 이상 입력해주세요",
                    },
                  })}
                ></LogInput>
              </>
            ) : (
              <></>
            )}

            <FaUser size={30} />
            <LogInput
              type="text"
              placeholder="아이디"
              {...register("username", {
                required: "아이디를 입력해주세요",
                minLength: {
                  value: 2,
                  message: "2자리 이상 입력해주세요",
                },
              })}
            ></LogInput>
            <FaUnlock size={30} />
            <LogInput
              type="password"
              placeholder="비밀번호"
              {...register("password", {
                required: "비밀번호를 입력해주세요",
                minLength: {
                  value: 2,
                  message: "2자리 이상 입력해주세요",
                },
              })}
            ></LogInput>
            <LoginButton type="submit">로그인</LoginButton>
          </LoginForm>
        </FormWrap>
      </Containers>
    </>
  );
};
