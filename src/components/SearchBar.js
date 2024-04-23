import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SearchForm = styled.form`
  margin-top: 30px;
`;
const SearchBars = styled.input`
  width: 300px;
  height: 24px;
  border-radius: 20px;
  border: 1px solid gray;
`;
const SearchButton = styled.button`
  all: unset;
  cursor: pointer;

  svg {
    position: relative;
    top: 1px;
    right: 24px;
  }
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
        <SearchButton type="submit">
          <FaSearch size={15} />
        </SearchButton>
      </SearchForm>
    </>
  );
};
