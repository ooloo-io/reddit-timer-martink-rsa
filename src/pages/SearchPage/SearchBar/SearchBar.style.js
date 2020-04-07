import styled from 'styled-components';

const SearchBarForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const Heading = styled.h1`
  margin-top: 28px;
  letter-spacing: ${(props) => props.theme.spacing.letters};
`;

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

const Prefix = styled.div`
  color: ${(props) => props.theme.colors.gray.text};
  font-size: 1.125rem;
  line-height: 0.5;
`;

const Input = styled.input`
  background: none;
  width: 370px;
  height: 36px;
  margin: 0 10px;
  padding-left: 15px;
  padding-top: 0px;
  border-radius: 2px;
  border: solid 1px ${(props) => props.theme.colors.gray.accent};
  font-size: ${(props) => props.theme.font.size.xs};
  box-sizing: border-box;
  &:focus {
    border: solid 1px ${(props) => props.theme.colors.primary.main};
    outline: none;
  }
`;

export {
  SearchBarForm,
  Heading,
  SearchBarContainer,
  Prefix,
  Input,
};
