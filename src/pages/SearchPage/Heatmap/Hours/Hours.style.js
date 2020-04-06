import styled from 'styled-components';


const HoursContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  height: 100%;
  width: auto;
  color: #757575;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 0px -1px 2px -2px rgba(0,0,0,0.1);
  &:first-child {
    border-left: 1px solid #f3f3f3;
  }
  &:last-child {
    border-right: 1px solid #f3f3f3;
  }
`;

const Hour = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 53px;
  width: 80px;
  background: linear-gradient(180deg, #fefefe 0%, #e9e9e9 100%);
  border-top: 1px solid #f3f3f3;
`;

export {
  HoursContainer,
  Hour,
};
