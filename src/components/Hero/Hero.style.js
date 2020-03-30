import styled from 'styled-components';
import Button from '../Button/Button';

const HeroWrapper = styled.header`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  margin-top: 28px;
  margin-bottom: 6px;
`;

const Subtitle = styled.p`
  color: ${(props) => props.theme.colors.gray.main};
`;

const CTA = styled(Button)`
  margin: 30px 0;
`;

const Caption = styled.p`
  font-weight: 500;
  margin: 17px 0 36px 0;
`;

export {
  HeroWrapper, Title, Subtitle, CTA, Caption,
};
