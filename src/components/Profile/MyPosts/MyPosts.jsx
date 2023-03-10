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
        <Post message='Hi, how are you?' count='10' />
        <Post message="It's my first post" count='12' />
      </div>
    </div>
  );
};

export default MyPosts;
