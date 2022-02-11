import React, { useState, useComponent } from "react"
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"
import './App.css'
import Header from "./Components/Header"
import Home from './Pages/Home'
import About from './Pages/About'
import Profile from './Pages/Profile'
import NotFound from './Pages/NotFound'
import Navbar from './Components/NavBar'
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';  
import Typography from '@material-ui/core/Typography';
import Login from "./Components/Login/Login"
import MultipleInputs from "./Components/forms/multipleInputs"

function App() {
  const [login, setLogin] = useState(false);

  return (
  <BrowserRouter>
      <div className="App"  style={{ marginLeft: '40%', marginTop: '60px', width: '30%'}} >
        <Navbar/> 
        {/* Routing */}
          <Switch>
            <Route exact path = '/' component = { Login } />
            <Route path = '/about' component = { About }/>
            <Route path = '/profile' component = { Profile }/>
            <Route path = '/login' component = { Login }/>
            <Route path = "/multipleInputs" component = { MultipleInputs } />
            <Route component = {NotFound} />
          </Switch>
          {/* Box and Container */}
            <Box color="white" bgcolor="palevioletred" p={1}>
                      Welcome to the app
              <Container maxWidth="sm">
                <Typography component="div" style={{ 
                  backgroundColor: 'Orange', height: '100vh' 
                  }}>
                      Greetings from DIV!
                </Typography>
              </Container>
            </Box> 
      </div>
  </BrowserRouter>
  );
}

export default App;
