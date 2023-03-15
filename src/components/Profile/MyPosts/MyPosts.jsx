import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let posts = [
    { id: 1, message: "Hi, how are you?", likesCount: 10 },
    { id: 2, message: "It's my first post", likesCount: 12 },
  ];

  let postsElements = posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

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
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
