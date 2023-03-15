import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsData = [
    { id: 1, name: "Artem" },
    { id: 2, name: "Daniel" },
    { id: 3, name: "Valera" },
    { id: 4, name: "Sanek" },
  ];

  let messages = [
    { id: 1, message: "Hi" },
    { id: 2, message: "Hi, hru?" },
    { id: 3, message: "Hi everyone" },
  ];

  let dialogsElements = dialogsData.map((d) => (
    <DialogItem id={d.id} name={d.name} />
  ));

  let messagesElements = messages.map((m) => <Message message={m.message} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
