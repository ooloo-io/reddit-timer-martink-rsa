import styled from 'styled-components';

const H1 = styled.h1`
  font-family: ${(props) => props.theme.fonts[0]};
  font-size: 2.375rem;
  color: ${(props) => props.theme.colors.textPrimary.main};
  margin-top: 28px;
  margin-bottom: 6px;
`;

const H2 = styled.h1`
  font-family: ${(props) => props.theme.fonts[0]};
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.textPrimary.main};
  margin-top: 28px;
  margin-bottom: 6px;
`;

const Subtitle = styled.p`
    color: ${(props) => props.theme.colors.gray.main};
`;


export {
  H1, H2, Subtitle,
};
