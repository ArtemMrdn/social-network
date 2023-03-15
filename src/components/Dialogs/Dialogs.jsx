import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const Message = (props) => {
  return <div className={s.message}>{props.message}</div>;
};

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={`${s.dialog} + ${s.active}`}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

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
