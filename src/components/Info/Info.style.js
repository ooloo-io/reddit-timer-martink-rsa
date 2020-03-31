import styled from 'styled-components';

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 348px;
  max-width: 738px;
  margin: 130px 0 100px 0;
  @media (max-width: 768px) {
    margin: 30px 0 30px 0;
  }
`;

const InfoSection = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  line-height: 27px;
  @media (max-width: 768px) {
    margin-top: 30px;
    padding: 0 20px;
  }
`;

const InfoHeading = styled.h2`
  margin: 0 0 13px 0;
`;

const InfoP = styled.p`
  margin: 0;
`;

const InfoList = styled.ul`
  margin: 0;
  list-style: none;
  padding-inline-start: 0px;
`;

const InfoListItem = styled.li`
  &:before {
    content: "·";
    font-weight: bold;
    display: inline-block;
    width: 9px;
  }
`;

export {
  InfoWrapper, InfoSection, InfoHeading, InfoP, InfoList, InfoListItem,
};
