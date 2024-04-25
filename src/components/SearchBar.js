import { useForm } from "react-hook-form";

import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ErrText } from "./Container";

export const SearchForm = styled.form`
  width: 100%;
  margin: 20px 0;
  position: relative;
  svg {
    position: absolute;
    left: 15px;
    top: 10px;
  }
`;
export const SearchBars = styled.input`
  padding: 0 50px;
  width: 100%;
  font-size: 16px;
  height: 50px;
  border-radius: 20px;
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
        <IoIosSearch size={30} color="gray" />
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
