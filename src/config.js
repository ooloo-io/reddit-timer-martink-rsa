// eslint-disable-next-line import/prefer-default-export
// TODO: Use function to generate path and use it in other files
export const DEFAULT_SUBREDDIT = 'javascript';
export const SEARCH_PATH = 'search';

export function getSearchPath(subreddit = DEFAULT_SUBREDDIT) {
  return `/${SEARCH_PATH}/${subreddit}`;
}
