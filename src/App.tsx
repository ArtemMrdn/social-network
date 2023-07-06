import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.tsx";
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";

import { UsersPage } from "./components/Users/UsersContainer.tsx";
import HeaderContainer from "./components/Header/HeaderContainer.tsx";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/app-reducer.ts";
import Preloader from "./components/common/Preloader/Preloader.tsx";
import store, { AppStateType } from "./redux/redux-store.ts";
import { withSuspense } from "./hoc/withSuspense.tsx";
import { LoginPage } from "./components/Login/LoginPage.tsx";

const DialogsContainer = React.lazy(
  () => import("./components/Dialogs/DialogsContainer.tsx")
);
const ProfileContainer = React.lazy(
  () => import("./components/Profile/ProfileContainer.tsx")
);

type MapPropsType = ReturnType<typeof mapStateToProps>;
type DispatchPropsType = {
  initializeApp: () => void;
};

const SuspendedDialogs = withSuspense(DialogsContainer);
const SuspendedProfile = withSuspense(ProfileContainer);

class App extends Component<MapPropsType & DispatchPropsType> {
  catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
    alert("Some error occured");
  };
  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }
  componentWillUnmount() {
    window.removeEventListener(
      "unhandledrejection",
      this.catchAllUnhandledErrors
    );
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Switch>
            <Route exact path='/' render={() => <Redirect to={"/profile"} />} />

            <Route path='/dialogs' render={() => <SuspendedDialogs />} />

            <Route
              path='/profile/:userId?'
              render={() => <SuspendedProfile />}
            />

            <Route
              path='/users'
              render={() => <UsersPage pageTitle={"Самураи"} />}
            />

            <Route path='/login' render={() => <LoginPage />} />

            <Route path='*' render={() => <div>404 NOT FOUND</div>} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized,
});

let AppContainer = compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const SamuraiJSApp: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default SamuraiJSApp;