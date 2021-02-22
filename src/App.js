import React, { Component } from "react";
import { BrowserRouter, Route, Router } from "react-router-dom";
import "./App.css";
import Content from "./Components/Content/Content";
import Dialogs from "./Components/Dialogs/Dialogs";
import Header from "./Components/Header/Header";
import Music from "./Components/Music/Music";
import Navigation from "./Components/Navbar/Nav";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navigation />
        <div className="app-wrapper-content">
          <Route path="/Dialogs" component={Dialogs} />
          <Route path="/Content" component={Content} />
          <Route path="/News" component={News}/>
          <Route path="/Music" component={Music}/>
          <Route path="/Settings" component={Settings}/>
        </div>
      </div>
    </BrowserRouter>
  )
};

export default App;
