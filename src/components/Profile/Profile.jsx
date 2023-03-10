import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7qpwVVDL5JxcranO9YRjfs4WG4hliTEh4IA44dKd2zqXcpp72HuV6BfncHV59FQ6NnwQ&usqp=CAU' />
      </div>
      <div>ava+description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
