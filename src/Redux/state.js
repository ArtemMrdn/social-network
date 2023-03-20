import { rerenderEntireTree } from "../render";

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi" },
      { id: 2, message: "Hi, hru?" },
      { id: 3, message: "Hi everyone" },
    ],
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: "Artem" },
      { id: 2, name: "Daniel" },
      { id: 3, name: "Valera" },
      { id: 4, name: "Sanek" },
    ],
    messages: [
      { id: 1, message: "Hi, how are you?", likesCount: 10 },
      { id: 2, message: "It's my first post", likesCount: 12 },
    ],
  },
  sidebar: {},
};

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
};

export default state;
