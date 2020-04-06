import styled from 'styled-components';

const PostsTableWrapper = styled.section`
  flex-grow: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin-top: 51px;
  background: lightblue;
`;

const PostsTableContainer = styled.div`
  width: 786px;
  background: lightgreen;
`;

const Heading = styled.h2`
  text-align: left;
`;

const Table = styled.table`
  text-align: left;
`;

const THead = styled.thead`
`;

const TRow = styled.tr`

`;

const THeading = styled.th`
`;

const TBody = styled.tbody`
`;

const TData = styled.td`
  max-width: 373px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export {
  PostsTableWrapper,
  PostsTableContainer,
  Heading,
  Table,
  THead,
  TRow,
  THeading,
  TBody,
  TData,
};
