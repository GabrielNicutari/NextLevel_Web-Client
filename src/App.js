import React, { Component } from "react";

import "./App.scss";
import "fontsource-roboto";
import '@morpheus-ui/fonts';

import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Footer from "./components/footer/footer.component";
import GamesPage from "./pages/games-page/games-page.component";
import GamePage from "./pages/game-page/game-page.component";
import Header from "./components/header/header.component";
import HomePage from "./pages/index-page/index-page.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Checkout from "./pages/checkout-page/checkout-page.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from "./redux/user/user.selector";


class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    console.log("something");
    console.log(process.env.REACT_APP_NAME);
    console.log(process.env.REACT_APP_API_URL);

    console.log(this.state.currentUser);

    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path={"/"} component={HomePage} />
          <Route exact path={"/games"} component={GamesPage} />
          <Route path={"/games/:id"} component={GamePage} />
          <Route exact path="/signin"
                 render={() => this.props.currentUser ? (<Redirect to="/" />) : (<SignInAndSignUpPage />)}
          />
	  <Route exact path="/checkout" component={Checkout}/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
