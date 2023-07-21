import { actions } from "../../../redux/profile-reducer";
import MyPo, { DispatchPropsType, MapPropsType } from "./MyPo";
import { connect } from "react-redux";
import { AppStateType } from "../../../redux/redux-store";

const mapStateToProps = (state: AppStateType) => {
  return {
    po: state.profilePage.po,
  };
};

const MyPostsContainer = connect<
  MapPropsType,
  DispatchPropsType,
  {},
  AppStateType
>(mapStateToProps, {
  addPost: actions.addPostActionCreator,
})(MyPo);

export default MyPostsContainer;
