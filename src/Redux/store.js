// // import profileReducer from "./profile-reducer";
// // import sidebarReducer from "./sidebar-reducer";
// // import dialogsReducer from "./dialogs-reducer";

// let store = {
//   _state: {
//     profilePage: {
//       posts: [
//         { id: 1, message: "Hi, how are you?", likesCount: 10 },
//         { id: 2, message: "It's my first post", likesCount: 12 },
//       ],
//       newPostText: "Learning react",
//     },
//     dialogsPage: {
//       dialogs: [
//         { id: 1, name: "Artem" },
//         { id: 2, name: "Daniel" },
//         { id: 3, name: "Valera" },
//         { id: 4, name: "Sanek" },
//       ],
//       messages: [
//         { id: 1, message: "Hi" },
//         { id: 2, message: "Hi, hru?" },
//         { id: 3, message: "Hi everyone" },
//       ],
//       newMessageBody: "",
//     },
//     sidebar: {},
//   },
//   _callSubscriber() {
//     console.log("State changed");
//   },

//   getState() {
//     debugger;
//     return this._state;
//   },
//   subscribe(observer) {
//     this._callSubscriber = observer; // observer
//   },

//   dispatch(action) {
//     this._state.profilePage = profileReducer(this._state.profilePage, action);
//     this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//     this._state.sidebar = sidebarReducer(this._state.sidebar, action);

//     this._callSubscriber(this._state);
//   },
// };

// export default store;
// window.store = store;
// // store - OOP
