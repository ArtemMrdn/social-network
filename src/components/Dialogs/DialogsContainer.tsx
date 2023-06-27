import Dialogs from "./Dialogs.tsx";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect.tsx";
import { AppStateType } from "../../redux/redux-store";
import { actions } from "../../redux/dialogs-reducer.ts";

let mapStateToProps = (state: AppStateType) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

export default compose<React.ComponentType>(
  connect(mapStateToProps, { ...actions }),
  withAuthRedirect
)(Dialogs);
