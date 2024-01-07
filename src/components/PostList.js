import React from 'react'
import Post from './Post';
// import axios from 'axios';
// import { useQuery } from 'react-query';

//fetch hashnode blog posts
// const fetchPosts = async () => {
//     const response = await axios.get("https://api.hashnode.com/v1/@ReddyDivya/posts");
//     return response.data;
// }

const posts = [
  {
    id: 1, title:'First Blogs', content: 'First blog content'
  },
  {
    id: 2, title:'Second Blogs', content: 'Second blog content'
  },
]

const PostList = () => {
  // const {posts, isLoading, isError} = useQuery('posts', fetchPosts);

  // if(isLoading) return <p>Loading</p>
  // if(isError) return <p>Error Loading posts</p>

  return (
    <div className="my-8 mx-auto max-w-2xl">
        {
            posts.map((post) => 
            <Post key={post.id} title={post.title} content={post.content} />)
        }
    </div>
  )
}

export default PostList