let store = {
  _state: {
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
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("State Changed");
  },
  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;
