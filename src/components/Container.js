import styled from "styled-components";

export const ErrText = styled.div`
  padding: 0 10px;
  margin-top: 10px;
  font-size: 12px;
  color: gray;
  opacity: 0.7;
  letter-spacing: 0;
`;
export const Containers = styled.div`
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.ContentBg};
  padding-bottom: 150px;
`;
