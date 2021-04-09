import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

export default function MyPosts() {
  return (
    <div className={s.content}>
      my posts
      <div  className={s.new_post_box}>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div>
        <Post message="Hi!" likeCount='15' />
        <Post message="Keep smiling :)" likeCount='20' />
        <Post message="GIkgfhvbkfjgb" likeCount='25' />
        <Post message="fbdfgfd" likeCount='5' />
      </div>
    </div>
  );
}
