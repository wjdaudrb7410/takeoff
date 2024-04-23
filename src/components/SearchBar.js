import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SearchForm = styled.form``;
const SearchBars = styled.input`
  width: 100%;
  font-size: 24px;
  height: 50px;
  border-radius: 20px;
  border: 1px solid gray;
`;
const SearchButton = styled.button`
  all: unset;
  cursor: pointer;
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
        <SearchBars
          type="text"
          placeholder="검색"
          {...register("keyword", { required: "검색값을 입력하세요" })}
        ></SearchBars>
        <SearchButton type="submit"></SearchButton>
      </SearchForm>
    </>
  );
};
