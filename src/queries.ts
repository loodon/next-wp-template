export const GetPostsQuery = `
query GetPosts {
  posts {
    edges {
      node {
        id
        title
        content
      }
    }
  }
}
`;
