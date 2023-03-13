import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={`${s.dialog} + ${s.active}`}>Artem</div>
        <div className={s.dialog}>Daniel</div>
        <div className={s.dialog}>Valera</div>
        <div className={s.dialog}>Sanek</div>
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
