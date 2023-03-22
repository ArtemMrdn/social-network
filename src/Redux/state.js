const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 10 },
        { id: 2, message: "It's my first post", likesCount: 12 },
      ],
      newPostText: "Learning react",
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

  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    // { type: 'ADD-POST' }
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default store;
