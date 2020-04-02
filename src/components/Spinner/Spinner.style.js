import styled from 'styled-components';

const spinnerSize = '6px';

const SpinnerWrapper = styled.div`
  margin-top: 56px;
  height: 71px;
  width: 71px;
`;

const SpinnerMain = styled.div`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  border: ${spinnerSize} solid ${(props) => props.theme.colors.secondary.main};;
  border-top: ${spinnerSize} solid ${(props) => props.theme.colors.gray.light};;
  border-radius: 50%;
  animation: spin 1.5s infinite ease;
  @keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`;




export { SpinnerWrapper, SpinnerMain };
