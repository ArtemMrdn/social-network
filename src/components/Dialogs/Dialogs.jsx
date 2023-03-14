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

  let messagesData = [
    { id: 1, message: "Hi" },
    { id: 2, message: "Hi, hru?" },
    { id: 3, message: "Hi everyone" },
  ];

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem id={dialogsData[0].id} name={dialogsData[0].name} />
        <DialogItem id={dialogsData[1].id} name={dialogsData[1].name} />
      </div>
      <div className={s.messages} s>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
        <Message message={messagesData[2].message} />
      </div>
    </div>
  );
};

export default Dialogs;
