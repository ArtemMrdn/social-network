import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      <div>My post</div>
      <textarea></textarea>
      <button>Add post</button>
      <button>Remove</button>
      <div>
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default MyPosts;
