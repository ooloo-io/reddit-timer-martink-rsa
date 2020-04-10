import styled from 'styled-components';

const Message = styled.p`
  font-size: ${(props) => props.theme.font.size.xs};
  margin-top: 13px;
  letter-spacing: ${(props) => props.theme.spacing.letters};
  text-align: center;
`;

const TimeZone = styled.span`
  font-weight: 700;
`;

export {
  Message,
  TimeZone,
};
