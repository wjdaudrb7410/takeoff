import { useForm } from "react-hook-form";

import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ErrText } from "./Container";

export const SearchForm = styled.form`
  margin: 20px 0;
  width: 100%;
  position: relative;
  svg {
    position: absolute;
    top: 5px;
  }
`;
export const SearchBars = styled.input`
  padding-left: 40px;
  width: 100%;
  font-size: 24px;
  height: 50px;
  border-radius: 20px;
  border: 1px solid gray;
`;
export const SearchBar = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    navigate(`/Search/${data.keyword}`);
    reset();
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit(onSubmit)}>
        <IoIosSearch size={40} color="gray" />
        <SearchBars
          type="text"
          placeholder="무슨 장소든 입력해 보세요"
          {...register("keyword", { required: "검색값을 입력하세요" })}
        ></SearchBars>
        <ErrText>{errors?.keyword?.message}</ErrText>
      </SearchForm>
    </>
  );
};
