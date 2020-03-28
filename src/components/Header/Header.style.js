import styled from 'styled-components';
import Link from '../Link/Link';

const HeaderWrapper = styled.header`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  width: 100%;
  padding: 0 80px;
`;

const Logo = styled.img`
  margin-top: 4px;
`;

const NavLink = styled(Link)`
  margin-left: 25px;
`;

export {
  HeaderWrapper, Logo, NavLink,
};
