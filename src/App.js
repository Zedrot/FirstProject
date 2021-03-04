import React, { render } from "react";
import { BrowserRouter, Route, Router } from "react-router-dom";
import "./App.css";
import Content from "./Components/Content/Content";
import Dialogs from "./Components/Dialogs/Dialogs";
import Header from "./Components/Header/Header";
import Music from "./Components/Music/Music";
import Navigation from "./Components/Navbar/Nav";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";

const App = (props) => {
  return (
    // <div className="Backyo">
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navigation />
        <div className="app-wrapper-content">
          <Route exact path="/Dialogs" render={() => <Dialogs />} />
          <Route
            exact
            path="/Content"
            render={() => <Content posts={props.posts} />}
          />
          <Route exact path="/News" render={News} />
          <Route exact path="/Music" render={Music} />
          <Route exact path="/Settings" render={Settings} />
        </div>
      </div>
    </BrowserRouter>
    /* </div> */
  );
};

export default App;
