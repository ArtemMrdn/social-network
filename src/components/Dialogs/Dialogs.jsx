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
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem id='1' name='Artem' />
        <DialogItem id='2' name='Daniel' />
        <DialogItem id='3' name='Valera' />
        <DialogItem id='4' name='Sanek' />
      </div>
      <div className={s.messages} s>
        <Message message='Hi' />
        <Message message='Hi, hru?' />
        <Message message='Hi everyone' />
      </div>
    </div>
  );
};

export default Dialogs;
