import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';

const Link = styled(HashLink)`
  color: ${(props) => props.theme.colors.gray.nav};
  text-decoration: none;
  letter-spacing: ${(props) => props.theme.spacing.letters};
  transition: color 250ms ease-out;
  &:hover {
    color: ${(props) => props.theme.colors.primary.main};
  }
`;

export default Link;
