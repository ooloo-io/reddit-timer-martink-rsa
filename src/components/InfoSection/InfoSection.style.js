import styled from 'styled-components';

const InfoSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 228px;
  width: 738px;
  line-height: 27px;
  h2 {
    margin: 0px 0 13px 0;
  }
  p {
    margin: 0;
  }
  &:last-of-type {
    height: 220px;
  }
`;

export default InfoSectionWrapper;
