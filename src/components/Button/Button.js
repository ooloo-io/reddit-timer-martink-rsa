import styled from 'styled-components';

const Button = styled.button`
  ${'' /* color: ${(props) => props.theme.colors.textPrimary.main}; */}
  color: white;
  text-decoration: none;
  transition: color 300ms ease-out;
  background: ${(props) => props.theme.colors.primary.main};;
  padding: 14px 15px;
  border-radius: 4px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 500;
  line-height: 0.64;
  margin: 30px 0 24px 0;
  border: none;
  text
  &:hover {
    color: ${(props) => props.theme.colors.textPrimary.light};
  }
`;

export default Button;
