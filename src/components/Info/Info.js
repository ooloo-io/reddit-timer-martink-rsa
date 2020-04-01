/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import {
  InfoWrapper, InfoSection, InfoHeading, InfoP, InfoList, InfoListItem,
} from './Info.style';

function Info() {
  return (
    <InfoWrapper>
      <InfoSection name="how-it-works">
        <InfoHeading>How it works</InfoHeading>
        <InfoList>
          <InfoListItem>
            We find the 500 top posts from the past year for a subreddit.
          </InfoListItem>
          <InfoListItem>
            The data is visualized in a heatmap grouped by weekday and hour of the day.
          </InfoListItem>
          <InfoListItem>
            See immediately when to submit your reddit post.
          </InfoListItem>
        </InfoList>
      </InfoSection>
      <InfoSection name="about">
        <InfoHeading>About</InfoHeading>
        <InfoP>
          This app was created during a course on{' '}
          <a href="https://ooloo.io" target="_blank" rel="noopener noreferrer">ooloo.io</a>{' '}
          with the goal to implement a pixel-perfect{' '}
          real-world application with professional workflows and tools like Kanban, Asana, Zeplin,{' '}
          GitHub, pull requests and code reviews.{' '}
          <a href="https://ooloo.io" target="_blank" rel="noopener noreferrer">Click here for more information.</a>
        </InfoP>
      </InfoSection>
    </InfoWrapper>
  );
}

export default Info;
