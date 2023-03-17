const state = {
  dialogsPage: {
    messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "Hi, hru?" },
      { id: 3, message: "Hi everyone" },
    ],
    dialogs: [
      { id: 1, name: "Artem" },
      { id: 2, name: "Daniel" },
      { id: 3, name: "Valera" },
      { id: 4, name: "Sanek" },
    ],
  },

  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", likesCount: 10 },
      { id: 2, message: "It's my first post", likesCount: 12 },
    ],
  },
};

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0,
  };
  state.profilePage.push(newPost);
};

export default state;
