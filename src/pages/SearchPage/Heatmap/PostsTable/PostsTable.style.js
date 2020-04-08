import styled from 'styled-components';

const PostsTableWrapper = styled.section`
  flex-grow: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  font-size: ${(props) => props.theme.font.size.xs};
`;

const PostsTableContainer = styled.div`
  width: 786px;
`;

const Heading = styled.h2`
  margin-top: 17px;
  margin-bottom: 10px;
  text-align: left;
`;

const Table = styled.table`
  border-collapse: collapse;
  text-align: left;
  table-layout:fixed;
  width: 786px;
`;

const THead = styled.thead`

`;

const TRow = styled.tr`

`;

const THeading = styled.th`
  width: ${(props) => props.width};
  border: solid 1px #dddddd;
  padding: 9px 11px;
  font-weight: 500;
  color:   ${(props) => props.theme.colors.gray.dark};

`;

const TBody = styled.tbody`
`;

const TData = styled.td`
  padding: 8px 11px 9px 11px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border: solid 1px #dddddd;
  color:   ${(props) => props.theme.colors.gray.dark};
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
