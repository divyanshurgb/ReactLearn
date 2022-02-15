import React, { useState, useComponent } from "react"
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"
import './App.css'
import Header from "./Components/Header"
import Home from './Pages/Home'
import About from './Pages/About'
import Profile from './Pages/Profile'
import NotFound from './Pages/NotFound'
import Navbar from './Components/NavBar'
import Login from "./Components/Login/Login"
import MultipleInputs from "./Components/forms/register"

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};


const App = () => {
  const [login, setLogin] = useState(false);
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/> 
          <Switch>
            <Route exact path = '/' component = { Login } />
            <Route path = '/about' component = { About }/>
            <Route path = '/profile' component = { Profile }/>
            <Route path = '/login' component = { Login }/>
            <Route path = "/multipleInputs" component = { MultipleInputs } />
            <Route component = {NotFound} />
          </Switch>
      </BrowserRouter>
    </div>

  );
}

export default App;
