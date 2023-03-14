import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={s.postsBlock}>
      <div>My post</div>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Add post</button>
      </div>
      <button>Remove</button>
      <div className={s.posts}>
        <Post message='Hi, how are you?' likesCount='10' />
        <Post message="It's my first post" likesCount='12' />
      </div>
    </div>
  );
};

export default MyPosts;
