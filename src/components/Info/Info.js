/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import InfoWrapper from './Info.style';
import InfoBox from '../InfoBox/InfoBox';

function Info() {
  return (
    <InfoWrapper>
      <InfoBox title="How it works">
        <ul>
          <li>
            We find the 500 top posts from the past year for a subreddit.
          </li>
          <li>
            The data is visualized in a heatmap grouped by weekday and hour of the day.
          </li>
          <li>
            See immediately when to submit your reddit post.
          </li>
        </ul>
      </InfoBox>
      <InfoBox title="About">
        This app was created during a course on ooloo.io with the goal to implement a pixel-perfect{' '}
        real-world application with professional workflows and tools like Kanban, Asana, Zeplin,{' '}
        GitHub, pull requests and code reviews. Click here for more information.
      </InfoBox>
    </InfoWrapper>
  );
}

export default Info;
