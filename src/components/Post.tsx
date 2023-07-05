type PostItemType = {
  postId?: string | null;
  postTitle?: string | null;
  postContent?: string | null;
};

const Post = ({ postId, postTitle, postContent }: PostItemType) => {
  console.log(postContent?.includes('\n'));
  return (
    <>
      <div>
        <h2>Post {postId}</h2>
        <div>Post Title: {postTitle}</div>
        <div style={{ whiteSpace: 'pre-line' }}>
          Post Description:
          <div dangerouslySetInnerHTML={{ __html: postContent }}></div>
        </div>
      </div>
    </>
  );
};

export default Post;