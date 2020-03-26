import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  height: 65px;
  width: 100%;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  margin-left: ${(props) => props.theme.spacing.baseline};
`;

const LinksContainer = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-right: ${(props) => props.theme.spacing.baseline};
`;

export {
  HeaderWrapper, LogoContainer, LinksContainer,
};
