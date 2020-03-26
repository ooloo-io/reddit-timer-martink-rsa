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
  margin-left: ${(props) => props.theme.margin};
`;

const LinksContainer = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-right: ${(props) => props.theme.margin};
`;

const Link = styled.a`
  color: ${(props) => props.theme.colors.textPrimary.main};
  margin-right: 10px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.colors.textPrimary.light};
  }
  &:last-child {
    margin-right: 0;
  }
`;

export {
  HeaderWrapper, LogoContainer, LinksContainer, Link,
};
