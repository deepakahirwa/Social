import React from 'react';
import Post from '../Post/Post';
import Share from "../share/Share.jsx";
import './feed.css';

function Feed({ avatar, name, posts }) {
  return (
    <div className="flex justify-center">
      <div className="feedWrapper flex flex-col justify-center align-middle gap-4">
        <Share className="m-2" />
        {posts?.map((post) => (
          <div key={post.id} className="flex justify-center gap-4">
            <Post
              avatar={avatar}
              name={name}
              postImage = {post.content}
              postCaption = {post.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feed;
