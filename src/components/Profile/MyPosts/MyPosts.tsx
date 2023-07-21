import React from "react";
import s from "./MyPo.module.css";
import Post from "./Post/Post";

import AddPostForm, { AddPostFormValuesType } from "./AddPostForm/AddPostForm";
import { PostType } from "../../../types/types";

export type MapPropsType = {
  po: Array<PostType>;
};
export type DispatchPropsType = {
  addPost: (newPostText: string) => void;
};

const MyPo: React.FC<MapPropsType & DispatchPropsType> = (props) => {
  let postsEleme = [...props.po]
    .reverse()
    .map((p) => (
      <Post key={p.id} message={p.message} likesCount={p.likesCount} />
    ));

  let onAddPost = (values: AddPostFormValuesType) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My po</h3>
      <AddPostForm onSubmit={onAddPost} />
      <div className={s.po}>{postsEleme}</div>
    </div>
  );
};

const MyPostsMemorized = React.memo(MyPo);

export default MyPostsMemorized;
