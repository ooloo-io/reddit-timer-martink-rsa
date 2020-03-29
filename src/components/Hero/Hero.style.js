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
  font-weight: 400;
  color: ${(props) => props.theme.colors.textPrimary.main};
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
`

export {
  HeroWrapper, Title, Subtitle, CTA, Caption,
};
