/* Acceptance criteria:
- the post table is shown when a box in the heatmap has been clicked
- it is not shown when there are no posts for the selected weekday/hour
- the table shows the post's title, time, score (number of upvotes), number of comments and author
- the title links to the post
- the author links to the author's reddit profile
- the time is the time when the post was created in the timezone of the current user
- the posts are sorted by the time they have been created */
import React from 'react';
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

function PostsTable({ info }) {
  console.log(info);
  return (
    <PostsTableWrapper>
      <PostsTableContainer>
        <Heading>Posts</Heading>
        <Table>
          <THead>
            <TRow>
              <THeading>Title</THeading>
              <THeading>Time Posted</THeading>
              <THeading>Score</THeading>
              <THeading>Comments</THeading>
              <THeading>Author</THeading>
            </TRow>
          </THead>
          {info.posts.map((item) => (
            <TBody key={item.title}>
              <TRow>
                <TData>{item.title}</TData>
                <TData>{item.created_utc}</TData>
                <TData>{item.score}</TData>
                <TData>{item.num_comments}</TData>
                <TData>{item.author}</TData>
              </TRow>
            </TBody>
          ))}
        </Table>
      </PostsTableContainer>
    </PostsTableWrapper>
  );
}

export default PostsTable;
