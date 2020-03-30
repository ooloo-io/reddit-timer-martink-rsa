import styled from 'styled-components';
import Button from '../Button/Button';

const HeroWrapper = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 130px;
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

const Img = styled.img`
  width: 100%;
`;

export {
  HeroWrapper, Title, Subtitle, CTA, Caption, Img,
};
