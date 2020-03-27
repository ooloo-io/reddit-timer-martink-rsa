import styled from 'styled-components';
import Link from '../Link/Link';

const HeaderWrapper = styled.header`
  display: flex;
  min-height: 100px;
  width: 100%;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  padding-top: 2px;
  padding-left: 54px;
`;

const LinksContainer = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding-right: 80px;
`;

const NavLink = styled(Link)`
  margin-left: 25px;
`;

export {
  HeaderWrapper, LogoContainer, LinksContainer, NavLink,
};
