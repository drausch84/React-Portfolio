import React, {Component} from 'react';
import { Route, Switch} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Skills from "./pages/Skills";
import Art from "./pages/Art";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/404";
import PageShell from "./components/PageShell";

class App extends Component{
  render(){
    return(
    <div className = "App">
      <Switch>
        <Route path = "/" exact component = {PageShell(Home)}></Route>
        <Route path = "/about-me" exact component = {PageShell(About)}></Route>
        <Route path = "/portfolio" exact component = {PageShell(Portfolio)}></Route>
        <Route path = "/skills" exact component = {PageShell(Skills)}></Route>
        <Route path = "/art" exact component = {PageShell(Art)}></Route>
        <Route path = "/contact" exact component = {PageShell(Contact)}></Route>
        <Route path = "*" exact component = {PageShell(PageNotFound)}></Route>
      </Switch>
    </div> 
        );
  };
};
export default App;

