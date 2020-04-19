import React from 'react';
import PropTypes from 'prop-types';
import {
  PostsTableWrapper,
  PostsTableContainer,
  Heading,
  Table,
  THead,
  TRow,
  THeading,
  TBody,
  TData,
} from './PostsTable.style';

// eslint-disable-next-line max-len
const sortByMinutes = (arr) => arr.sort((a, b) => (a.created.getMinutes() > b.created.getMinutes() ? 1 : -1));

function displayHHMM(date) {
  let hour = date.getHours();
  let min = date.getMinutes();
  let timePeriod = 'am';
  if (hour - 12 > 0) {
    timePeriod = 'pm';
    hour -= 12;
  }
  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (min < 10) {
    min = `0${min}`;
  }
  return `${hour}:${min}${timePeriod}`;
}

function PostsTable({ info }) {
  return (
    <PostsTableWrapper>
      <PostsTableContainer>
        <Heading>Posts</Heading>
        <Table data-testid="heatmap-table">
          <THead>
            <TRow>
              <THeading width="346px">Title</THeading>
              <THeading width="91px">Time Posted</THeading>
              <THeading width="41px">Score</THeading>
              <THeading width="81px">Comments</THeading>
              <THeading width="106px">Author</THeading>
            </TRow>
          </THead>
          {sortByMinutes(info).map((item) => (
            <TBody key={`${item.title}-`}>
              <TRow data-testid="heatmap-table-row">
                <TData>
                  <a
                    href={item.full_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.title}
                  </a>
                </TData>
                <TData>{displayHHMM(item.created)}</TData>
                <TData>{item.score}</TData>
                <TData>{item.num_comments}</TData>
                <TData>
                  <a
                    href={`https://www.reddit.com/user/${item.author}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.author}
                  </a>
                </TData>
              </TRow>
            </TBody>
          ))}
        </Table>
      </PostsTableContainer>
    </PostsTableWrapper>
  );
}

PostsTable.propTypes = {
  info: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostsTable;
