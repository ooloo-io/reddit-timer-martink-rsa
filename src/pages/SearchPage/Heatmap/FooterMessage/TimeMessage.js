import React from 'react';
import {
  Message,
  TimeZone,
} from './TimeMessage.style';

function TimeMessage() {
  return (
    <Message>
      All times are shown in your timezone:
      {' '}
      <TimeZone>
        {Intl.DateTimeFormat().resolvedOptions().timeZone}
      </TimeZone>
    </Message>
  );
}

export default TimeMessage;
