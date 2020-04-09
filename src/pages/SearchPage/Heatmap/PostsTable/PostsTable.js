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

/* function sortByKey(a, b, key) {
  console.log(a[key]);
  console.log(b[key]);
  if (a[key] > b[key]) {
    return 1;
  } else if (b[key] > a[key]) {
    return -1;
  } else {
    return 0;
  }
} */

function sortByMinutes(arr) {
  /* const createdAtInMs = seconds * 1000;
  const date = new Date(createdAtInMs);
  let min = date.getMinutes(); */

  return arr;
}

function convertEpochToClock(seconds) {
  const createdAtInMs = seconds * 1000;
  const date = new Date(createdAtInMs);
  let hour = date.getHours();
  let min = date.getMinutes();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (min < 10) {
    min = `0${min}`;
  }
  return `${hour}:${min}`;
}

function PostsTable({ info }) {
  return (
    <PostsTableWrapper>
      <PostsTableContainer>
        <Heading>Posts</Heading>
        <Table>
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
            <TBody key={`${item.title} -${item.created_utc} `}>
              <TRow>
                <TData><a href={item.full_link}>{item.title}</a></TData>
                <TData>{convertEpochToClock(item.created_utc)}</TData>
                <TData>{item.score}</TData>
                <TData>{item.num_comments}</TData>
                <TData><a href={`https://www.reddit.com/user/${item.author}`}>{item.author}</a></TData>
              </TRow>
            </TBody>
          ))}
        </Table>
      </PostsTableContainer>
    </PostsTableWrapper>
  );
}

PostsTable.propTypes = {
  info: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default PostsTable;
