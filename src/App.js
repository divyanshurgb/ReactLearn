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
import MultipleInputs from "./Components/Register/register"
import Profile1 from "./Components/UseContext/Profile1";
import Create from './Components/CRUD/create/create';
import Read from './Components/CRUD/read/read';
import Update from './Components/CRUD/update/update';

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
        <div>
          <Route path='/' component={Create} />
        </div>

        <div style={{ marginTop: 20 }}>
          <Route path='/read' component={Read} />
        </div>
        <div>
        <Route path='/update' component={Update} />  

        </div>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
