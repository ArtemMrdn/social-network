const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }],
      };
    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody,
});

export default dialogsReducer;
