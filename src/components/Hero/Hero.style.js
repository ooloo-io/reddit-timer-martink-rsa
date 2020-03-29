import styled from 'styled-components';
import Button from '../Button/Button';

const HeroWrapper = styled.header`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Title = styled.h1`
  font-family: ${(props) => props.theme.fonts[0]};
  font-size: 2.375rem;
  color: ${(props) => props.theme.colors.textPrimary.main};
  margin-top: 28px;
  margin-bottom: 6px;
`;

const Subtitle = styled.p`
  color: ${(props) => props.theme.colors.gray.main};
`;

const HeroForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const CTA = styled(Button)`
  margin: 30px 0 30px 0;
`;

const Input = styled.input`
  color: ${(props) => props.theme.colors.gray.main};
  text-align: center;
  border: none;
  margin: 15px 0 35px 0;
  background: none;
  &:focus {
    outline: none;
  }
`;

export {
  HeroWrapper, Title, Subtitle, HeroForm, CTA, Input,
};
