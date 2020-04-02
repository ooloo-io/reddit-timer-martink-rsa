import styled from 'styled-components';

const ButtonInactive = styled.button`
  color: white;
  text-decoration: none;
  transition: color 300ms ease-out;
  background: ${(props) => props.theme.colors.gray.main};
  padding: 14px 15px;
  border-radius: 4px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 500;
  line-height: 0.64;
  border: none;
`;

export default ButtonInactive;
