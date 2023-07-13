'use client';

// Component(s)
import Post from '../components/Post';

// Context(s)
import { PostsContext } from '../context/PostsContext';

const Home = () => {
  return (
    <PostsContext.Consumer>
      {(value) => {
        return (
          <>
            <main className='flex min-h-screen flex-col items-center justify-between p-24'>
              {value?.posts?.map((post: any) => {
                console.log(post);
                return (
                  <Post
                    key={`post-${post?.postId}`}
                    postId={post?.postId}
                    postTitle={post?.postTitle}
                    postContent={post?.postContent}
                  />
                );
              })}
            </main>
          </>
        );
      }}
    </PostsContext.Consumer>
  );
};

export default Home;
