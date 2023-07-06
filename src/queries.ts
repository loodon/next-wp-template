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

export const GetHeaderQuery = `
query GetPosts {
  header {
    
  }
}
`;
