import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={`${s.dialog} + ${s.active}`}>
          <NavLink to='/dialogs/1'>Artem</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/2'>Daniel</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/3'>Valera</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/4'>Sanek</NavLink>
        </div>
      </div>
      <div className={s.messages} s>
        <div className={s.message}>Hi </div>
        <div className={s.message}>Hi, hru</div>
        <div className={s.message}>Hi everyone</div>
      </div>
    </div>
  );
};

export default Dialogs;
