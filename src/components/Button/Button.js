import styled from 'styled-components';

const Button = styled.button`
  color: white;
  text-decoration: none;
  transition: color 300ms ease-out;
  background: ${(props) => props.theme.colors.primary.main};
  padding: 14px 15px;
  border-radius: 4px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 500;
  line-height: 0.64;
  border: none;
  transition: background 300ms ease-out;
  &:hover {
    background: ${(props) => props.theme.colors.primary.light};
  }
`;

export default Button;
