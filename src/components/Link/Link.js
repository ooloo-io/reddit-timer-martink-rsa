import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

const Link = styled(RouterLink)`
  color: #636363;
  text-decoration: none;
  transition: color 250ms ease-out;
  &:hover {
    color: ${(props) => props.theme.colors.primary.main};
  }
`;

export default Link;
