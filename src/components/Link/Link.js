import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

const Link = styled(RouterLink)`
  color: #636363;
  text-decoration: none;
  transition: color 300ms ease-out;
  text-align: right;
  &:hover {
    color: ${(props) => props.theme.colors.primary.main};
  }
`;

export default Link;
