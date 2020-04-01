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
  text-align: left;
  @media (max-width: ${(props) => props.theme.breakpoint.small}) {
    padding: 0 5%;
  }
`;

const Logo = styled.img`
  margin-top: 2px;
  height: 100%;
  width: 100%;
`;

const NavLink = styled(Link)`
  margin-left: 26px;
  white-space: nowrap;
  @media (max-width: ${(props) => props.theme.breakpoint.small}) {
    margin-left: 10px;
  }
`;

export {
  HeaderWrapper, Logo, NavLink,
};
