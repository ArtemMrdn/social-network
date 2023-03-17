import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  const postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  const newPostElement = React.createRef();

  const addPost = () => {
    const text = newPostElement.current.value;
    alert(text);
  };

  return (
    <div className={s.postsBlock}>
      <div>My post</div>
      <div>
        <textarea ref={newPostElement}></textarea>
      </div>
      <div>
        <button onClick={addPost}>Add post</button>
      </div>
      <button>Remove</button>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
