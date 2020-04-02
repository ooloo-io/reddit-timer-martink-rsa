import styled from 'styled-components';

const SearchBarForm = styled.form`
display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;

`;

const Heading = styled.h1`
  margin-top: 28px;
`;

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

const Prefix = styled.div`
  color: #9e9e9e;
  font-size: 18px;
  line-height: 0.5;
`;

const Input = styled.input`
  background: none;
  width: 370px;
  height: 32px;
  margin: 0 10px;
  border-radius: 2px;
  border: solid 1px #e6e6e6;
  font-size: 14px;
  text-indent: 14px;
`;

export {
  SearchBarForm,
  Heading,
  SearchBarContainer,
  Prefix,
  Input,
};
