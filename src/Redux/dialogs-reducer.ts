import { InferActionsTypes } from "./redux-store";

type DialogType = {
  id: number;
  name: string;
};
type MessageType = {
  id: number;
  message: string;
};

let initialState = {
  dialogs: [
    { id: 1, name: "Artem" },
    { id: 2, name: "Daniel" },
    { id: 3, name: "Valera" },
    { id: 4, name: "Sanek" },
  ] as Array<DialogType>,
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "Hi, hru?" },
    { id: 3, message: "Hi everyone" },
  ] as Array<MessageType>,
};

const dialogsReducer = (
  state = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case "SN/DIALOGS/SEND_MESSAGE":
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }],
      };
    default:
      return state;
  }
};

export const actions = {
  sendMessage: (newMessageBody: string) =>
    ({ type: "SN/DIALOGS/SEND_MESSAGE", newMessageBody } as const),
};

export default dialogsReducer;

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>;
