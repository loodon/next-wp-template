'use client';
import { createContext, useState, ReactNode, useEffect } from 'react';
import axios from 'axios';

import { GetPostsQuery } from '@/queries';

type PostItemType = {
  id?: string;
  title?: string;
  content?: string;
} | null;

type PostsContextType = {
  posts?: PostItemType[] | null;
  postsSet?: any;
} | null;

export const PostsContext = createContext<PostsContextType>(null);

const Context = ({ children }: { children?: ReactNode }) => {
  const [posts, postsSet] = useState(null);

  const getPosts = async () => {
    try {
      axios({
        url: `${process.env.NEXT_PUBLIC_API_URL}`,
        headers: {
          'Content-Type': 'application/json',
          // Authorization:
          //   'Basic ' +
          //   btoa(
          //     `${process.env.NEXT_PUBLIC_WP_USER}:${process.env.NEXT_PUBLIC_WP_PASSWORD}`
          //   ),
        },
        method: 'post',
        data: {
          query: GetPostsQuery,
        },
      }).then((result) => {
        console.log('result', result);
        const postsArray = result?.data?.data?.posts?.edges?.map(
          (post: any) => {
            return {
              postId: post?.node?.id,
              postTitle: post?.node?.title,
              postContent: post?.node?.content,
            };
          }
        );

        postsSet(postsArray);
      });
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <PostsContext.Provider value={{ posts, postsSet }}>
      {children}
    </PostsContext.Provider>
  );
};

export default Context;
