import styled from 'styled-components';
import { Link as link } from 'react-router-dom';

const Link = styled(link)`
  color: ${(props) => props.theme.colors.textPrimary.main};
  margin-right: ${(props) => props.theme.spacing.headerLinks};
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.colors.textPrimary.light};
  }
  &:last-child {
    margin-right: 0;
  }
`;

export { Link };
