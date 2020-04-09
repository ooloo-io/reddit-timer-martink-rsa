import styled from 'styled-components';
import Button from '../Button/Button';

const HeroWrapper = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  margin-top: 28px;
  margin-bottom: 6px;
  padding: 0 10px;
  text-align: center;
`;

const Subtitle = styled.p`
  color: ${(props) => props.theme.colors.gray.main};
  text-align: center;
`;

const CTA = styled(Button)`
  margin: 30px 0;
`;

const Caption = styled.p`
  font-weight: 500;
  margin: 17px 0 36px 0;
`;

const Img = styled.img`
  box-sizing: border-box;
  width: 100%;
  padding: 0 20px;
`;

export {
  HeroWrapper, Title, Subtitle, CTA, Caption, Img,
};
