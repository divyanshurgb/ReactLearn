import React, { useComponent } from "react"
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"
import './App.css'
import Header from "./Components/Header/Header"
import Home from './Components/Header/Pages/Home'
import About from './Components/Header/Pages/About'
import Profile from './Components/Header/Pages/Profile'
import NotFound from './Components/Header/Pages/NotFound'
import Navbar from './Components/Header/NavBar'
import Login from "./Components/Login/Login"
import MultipleInputs from "./Components/Register/register"
import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom";

const UserContext = createContext();

function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello Profile 1 ${user}!`}</h1>
      <Component2 user={user} />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello Profile 1 ${user}`}</h2>
    </>
  );
}

const App = () => {
  const [login, setLogin] = useState(false);
  const [authname, setauthname] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/> 
          <Switch>
            <Route exact path = '/' component = { Login } />
            <Route path = '/about' component = { About }/>
            <Route path = '/profile' component = { Component1 }/>
            <Route path = '/login' component = { Login }/>
            <Route path = "/multipleInputs" component = { MultipleInputs } />
            <Route component = {NotFound} />
          </Switch>
      </BrowserRouter>
      
    </div>

  );
}

export default App;
