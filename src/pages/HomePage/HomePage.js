/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Hero from '../../components/Hero/Hero';
import InfoSection from '../../components/InfoSection/InfoSection';

function HomePage() {
  return (
    <>
      <Hero />
      <InfoSection name="how-it-works" title="How it works">
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
      </InfoSection>
      <InfoSection name="about" title="About">
        <p>
          This app was created during a course on{' '}
          <a href="https://ooloo.io" target="_blank" rel="noopener noreferrer">ooloo.io</a>{' '}
          with the goal to implement a pixel-perfect{' '}
          real-world application with professional workflows and tools like Kanban, Asana, Zeplin,{' '}
          GitHub, pull requests and code reviews.{' '}
          <a href="https://ooloo.io" target="_blank" rel="noopener noreferrer">Click here for more information.</a>
        </p>
      </InfoSection>
    </>
  );
}

export default HomePage;
