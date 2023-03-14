import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7qpwVVDL5JxcranO9YRjfs4WG4hliTEh4IA44dKd2zqXcpp72HuV6BfncHV59FQ6NnwQ&usqp=CAU' />
      </div>
      <div className={s.descriptionBlock}>ava+description</div>
    </div>
  );
};

export default ProfileInfo;
