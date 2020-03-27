import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

const Link = styled(RouterLink)`
  color: ${(props) => props.theme.colors.textPrimary.main};
  text-decoration: none;
  transition: color 300ms ease-out;
  &:hover {
    color: ${(props) => props.theme.colors.textPrimary.light};
  }
`;

export default Link;
