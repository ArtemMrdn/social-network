let rerenderEntireTree = () => {
  console.log("State Changed");
};

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", likesCount: 10 },
      { id: 2, message: "It's my first post", likesCount: 12 },
    ],
    newPostText: "it-kamasutra.com",
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: "Artem" },
      { id: 2, name: "Daniel" },
      { id: 3, name: "Valera" },
      { id: 4, name: "Sanek" },
    ],
    messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "Hi, hru?" },
      { id: 3, message: "Hi everyone" },
    ],
  },
  sidebar: {},
};

window.state = state;

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};

export default state;
