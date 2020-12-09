import React, { Component } from "react";

import "./App.scss";
import "fontsource-roboto";

import { Switch, Route } from "react-router-dom";

import Footer from "./components/footer/footer.component";
import GamesPage from "./pages/games-page/games-page.component";
import GamePage from "./pages/game-page/game-page.component";
import Header from "./components/header/header.component";
import HomePage from "./pages/index-page/index-page.component";


class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  render() {
    console.log(process.env.REACT_APP_NAME);
    console.log(process.env.REACT_APP_API_URL);
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path={"/"} component={HomePage} />
          <Route exact path={"/games"} component={GamesPage} />
          <Route path={"/games/:id"} component={GamePage} />
          {/*<Route exact path={"/customers"} component={CustomersPage} />*/}
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
