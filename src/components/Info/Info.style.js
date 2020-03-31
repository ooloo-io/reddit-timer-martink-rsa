import styled from 'styled-components';

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 738px;
  margin: 24px 0 100px 0;
`;

const InfoSection = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 86px;
  line-height: 27px;
  @media (max-width: ${(props) => props.theme.breakpoint.small}) {
    margin-top: 30px;
    padding: 0 20px;
  }
`;

const InfoHeading = styled.h2`
  margin-bottom: 14px;
`;

const InfoP = styled.p`
  margin: 0;
  letter-spacing: ${(props) => props.theme.spacing.letters};
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
    letter-spacing: ${(props) => props.theme.spacing.letters};
  }
`;

export {
  InfoWrapper, InfoSection, InfoHeading, InfoP, InfoList, InfoListItem,
};
